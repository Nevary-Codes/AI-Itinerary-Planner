
# AI Itinerary Planner 🗺️

### Project Overview
**AI Itinerary Planner** is an AI-powered travel planning assistant that generates customized travel itineraries in real-time. Users provide their trip details — including destination, dates, budget, and preferences — and the AI produces a day-by-day plan, complete with recommendations, activities, and travel arrangements.

This project uses **n8n** to orchestrate AI agent workflows, enabling flexible itinerary generation and easy integration with multiple data sources.

### 🌟 Features
- **Natural Language Input**: Enter your travel requirements in simple language.
- **Dynamic Itinerary Generation**: Get a complete, tailored itinerary in real time.
- **Live Metrics**: See word count and estimated time while itinerary is generated.
- **Recent Trips History**: Keeps track of recent trips with timestamps and planning duration.
- **Example Trips**: Quick-start buttons for sample itineraries.
- **Error Handling**: Displays warnings for missing or incorrect inputs.

### 🛠️ Tech Stack
- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **AI Integration**: n8n (custom travel planning agents)

### 🚀 Quick Start

#### Prerequisites
- Node.js 18+
- n8n instance running (local or cloud) with configured travel planning agents
- Git

#### Installation

1. **Clone the Repository**
```bash
git clone <your-repo-url>
cd ai-itinerary-planner
```

2. **Install Dependencies**
```bash
npm install
```

3. **Run Development Server**
```bash
npm run dev
```

4. **Open in Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### 🎮 How to Use
1. Enter your trip details (destination, dates, budget, preferences, etc.).
2. Click **Generate Itinerary**.
3. Watch the itinerary appear in real time.
4. Check metrics such as word count and generation time.
5. Review past trips in the **Recent Trips** section.
6. Click example trips for quick testing.

### 🤖 AI Integration with n8n
The AI workflow:
- Receives user travel details from the frontend.
- Sends the request to **n8n travel planning agents** for processing.
- Streams generated itinerary content back to the UI in real time.
- Stores trip history along with metrics like generation time.

This approach allows:
- Easy customization of itinerary generation workflows.
- Integration with travel APIs and external data sources.
- Scalability for future travel planning features.

### 🎨 Customization
- **UI & Features**: Edit `components/ItineraryPlanner.tsx`.
- **Styling**: Update `globals.css` or `tailwind.config.js`.
- **AI Agents**: Modify workflows in n8n.

### 📊 Educational Impact
- Demonstrates AI-assisted travel planning.
- Shows real-time itinerary generation with live metrics.
- Highlights how AI workflows can be orchestrated using n8n.

### 🔧 Development

#### Project Structure
```
ai-itinerary-planner/
├── app/
│   ├── api/
│   │   └── process-command/ # API route to send requests to n8n agents
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ItineraryPlanner.tsx
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

#### Available Scripts
- `npm run dev` — Start development server
- `npm run build` — Build production version
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
- `npm run typecheck` — Run TypeScript type checking

### 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Test thoroughly
5. Submit a pull request

### 📄 License

*"The best way to improve your travel experience is to start planning."*

**✈️ AI Itinerary Planner — Real-time AI Travel Assistant Powered by n8n**
