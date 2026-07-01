# AI Chat Assistant

A ChatGPT-style conversational AI web app built with React 19 and Google's Gemini API. Features a clean chat interface, persistent conversation history in the sidebar, and a dark/light theme toggle.


## Features

- 💬 **Conversational AI Chat** — Real-time responses powered by Google's Gemini 2.5 Flash model
- 🔍 **Search-Grounded Answers** — Gemini's Google Search grounding tool integrated for up-to-date responses
- 🕑 **Chat History Sidebar** — Collapsible sidebar showing previous prompts, click to revisit
- 🌗 **Dark / Light Mode** — Theme toggle using CSS custom properties, applied globally via `document.body`
- ⚡ **Loading State UX** — Animated shimmer loader while waiting on AI responses
- 🧠 **Centralized State** — Global state management via React Context API (no prop drilling)

## Tech Stack

| Category | Technology |
|---|---|
| Frontend | React 19, Vite |
| State Management | React Context API |
| AI / LLM | Google Gemini API (`@google/genai`) |
| Icons | react-icons |
| Styling | Plain CSS with CSS custom properties (theming) |
| Linting | ESLint |

## Project Structure

```
📦src
 ┣ 📂assets
 ┃ ┣ 📜ai.png
 ┃ ┣ 📜hero.png
 ┃ ┗ 📜user.png
 ┣ 📂components
 ┃ ┣ 📂SIdebar          # Chat history + navigation
 ┃ ┣ 📂chatSection      # Main chat window + input
 ┃ ┣ 📂darkmode         # Theme toggle button
 ┃ ┗ 📂separation       # Visual divider between sidebar and chat
 ┣ 📂context
 ┃ ┗ 📜UserContext.jsx  # Global state: input, chat history, loading, results
 ┣ 📜App.jsx
 ┣ 📜gemini.js          # Gemini API integration
 ┣ 📜index.css          # Global styles + theme variables
 ┗ 📜main.jsx
```

## Architecture Overview

- **`UserContext.jsx`** wraps the whole app and exposes shared state (`input`, `resultData`, `previousPrompt`, `loading`, etc.) along with the `sent()` function that triggers a Gemini API call and updates state as the response streams in.
- **`gemini.js`** initializes the `GoogleGenAI` client using an API key from environment variables and calls `ai.models.generateContent()` with Google Search grounding enabled and `temperature: 1`.
- **`ChatSection`** renders either the welcome screen or the active conversation (user prompt + AI response), and shows a shimmer loader while `loading` is `true`.
- **`Sidebar`** lists past prompts from `previousPrompt` and lets the user re-trigger any of them.
- **`Darkmode`** toggles a CSS class (`darkmode` / `lightmode`) on `document.body`, which switches CSS custom property values (`--color`, `--btn-background-color`, etc.) consumed across all components.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- A [Google Gemini API key](https://aistudio.google.com/app/apikey)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd chatapp

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## Roadmap / Known Limitations

- [ ] Chat history currently lives only in React state and is lost on page refresh — persist to `localStorage` or a backend
- [ ] AI responses are not rendered as formatted Markdown yet (bold, lists, code blocks)
- [ ] No unique `key` prop on sidebar's mapped chat list items
- [ ] No authentication / multi-user support

## License

This project is for personal/portfolio use.

## Author

**Akshay Gaur**
[GitHub](https://github.com/competitiveakshay) · [LinkedIn](#)
