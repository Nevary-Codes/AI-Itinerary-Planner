
# AI Article Generator ✍️

### Project Overview
**AI Article Generator** is an AI-powered tool that creates high-quality articles in real-time. Users simply provide a topic, and the AI generates content while updating word and character counts and maintaining a history of recent topics for reference.

This project uses **n8n** to orchestrate AI agent workflows for generating content, making it flexible and easy to extend.

### 🌟 Features
- **Natural Language Input**: Enter any topic and receive AI-generated content instantly.
- **Streaming Output**: See the article appear as it’s generated in real-time.
- **Word & Character Metrics**: Live counts updated during generation.
- **Recent Topics History**: Tracks past topics with timestamps and generation time.
- **Example Topics**: Quick-start buttons for testing.
- **Error Handling**: Displays warnings for missing input or failed generation.

### 🛠️ Tech Stack
- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **AI Integration**: n8n (custom AI agents and workflows)

### 🚀 Quick Start

#### Prerequisites
- Node.js 18+
- n8n instance running (local or cloud) with configured AI agents
- Git

#### Installation

1. **Clone the Repository**
```bash
git clone <your-repo-url>
cd ai-article-generator
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
1. Enter a topic in the input field.
2. Click **Generate Article**.
3. Watch the article appear in real time.
4. View word and character counts as generation progresses.
5. Review past topics in the **Recent Topics** section.
6. Click example topics to try the tool instantly.

### 🤖 AI Integration with n8n
The AI workflow:
- Accepts user input from the frontend.
- Sends the request to **n8n AI agents** for processing.
- Streams generated content back to the UI in real time.
- Stores topic history along with metrics like generation time.

This setup allows:
- Easy modification of AI workflows without touching frontend code.
- Integration of multiple AI tools and APIs.
- Scalability for future features.

### 🎨 Customization
- **UI & Features**: Edit `components/ArticleGenerator.tsx`.
- **Styling**: Update `globals.css` or `tailwind.config.js`.
- **AI Agents**: Modify workflows in n8n.

### 📊 Educational Impact
- Demonstrates AI-assisted writing.
- Shows real-time streaming with live metrics.
- Highlights how AI can be orchestrated with n8n agents.

### 🔧 Development

#### Project Structure
```
ai-article-generator/
├── app/
│   ├── api/
│   │   └── process-command/ # API route to send requests to n8n agents
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ArticleGenerator.tsx
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
Part of the **OpenxAI Global AI Accelerator**.

*"The best way to improve your writing is to start writing."*

**✍️ AI Article Generator — Real-time AI Writing Assistant Powered by n8n**
