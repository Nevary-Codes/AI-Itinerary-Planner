"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    destination: "",
    currentCity: "",
    startDate: "",
    duration: "",
    budget: "Medium", // default
    travelers: "",
    transport: "",
    preferences: [] as string[],
  });

  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePreferences = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, preferences: e.target.value.split(",").map((s) => s.trim()) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://aryan-weather.app.n8n.cloud/webhook-test/travel-itinerary", {
        ...form,
        submittedAt: new Date().toISOString(),
      });
      setItinerary(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to submit itinerary request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h1 className="text-5xl font-extrabold mb-4">Plan Your Dream Trip with AI</h1>
        <p className="text-lg max-w-2xl">
          Get a personalized, day-by-day itinerary tailored to your preferences, budget, and style of travel.
        </p>
      </section>

      {/* Form Section */}
      <section className="flex-1 flex items-center justify-center py-16 px-6">
        <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Start Planning</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
      <input
        name="name"
        value={form.name}
        placeholder="Your Name"
        onChange={handleChange}
        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
      />
      <input
        name="email"
        type="email"
        value={form.email}
        placeholder="Email"
        onChange={handleChange}
        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
      />
      <input
        name="destination"
        value={form.destination}
        placeholder="Destination"
        onChange={handleChange}
        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
      />
      <input
        name="currentCity"
        value={form.currentCity}
        placeholder="Current City"
        onChange={handleChange}
        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
      />
      <input
        name="startDate"
        type="date"
        value={form.startDate}
        onChange={handleChange}
        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
      />
      <input
        name="duration"
        value={form.duration}
        placeholder="Duration (days)"
        onChange={handleChange}
        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
      />

      {/* Budget as select */}
      <select
        name="budget"
        value={form.budget}
        onChange={handleChange}
        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <input
        name="travelers"
        value={form.travelers}
        placeholder="Number of Travelers"
        onChange={handleChange}
        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
      />
      <input
        name="transport"
        value={form.transport}
        placeholder="Transport (e.g., Flight, Train)"
        onChange={handleChange}
        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
      />
      <input
        name="preferences"
        placeholder="Preferences (comma separated)"
        value={form.preferences.join(", ")}
        onChange={handlePreferences}
        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition font-semibold"
        disabled={loading}
      >
        {loading ? "Planning..." : "Get Itinerary"}
      </button>
    </form>

          {itinerary && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border shadow-inner">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Check your Email, We have sent you the Itinerary</h3>
              <pre className="whitespace-pre-wrap text-sm leading-relaxed">{JSON.stringify(itinerary, null, 2)}</pre>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h4 className="text-lg font-bold mb-2">Personalized Plans</h4>
            <p className="text-gray-600">Tailored recommendations based on your budget, preferences, and group size.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h4 className="text-lg font-bold mb-2">Hidden Gems</h4>
            <p className="text-gray-600">Discover offbeat spots, restaurants, and experiences curated by AI.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h4 className="text-lg font-bold mb-2">Easy to Share</h4>
            <p className="text-gray-600">Receive your itinerary via email and Google Sheets for easy access anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6">
        <p>© {new Date().getFullYear()} AI Itinerary Planner — Built with ❤️ using Next.js & n8n</p>
      </footer>
    </main>
  );
}