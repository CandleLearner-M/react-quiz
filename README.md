# React Quiz App

A dynamic and interactive quiz application focused on testing React knowledge. Built with React, TypeScript, and Framer Motion, this application provides an engaging quiz experience with animations, timers, and score tracking.

## Features

- 🧠 15 questions testing React knowledge
- ⏱️ Timer with automatic completion when time runs out
- 🏆 High score tracking
- 📊 Progress tracking during quiz
- ✅ Immediate feedback on question answers
- 🎬 Smooth animations using Framer Motion
- 📱 Responsive design

## Technologies Used

- React 19
- TypeScript
- Vite
- Framer Motion
- ESLint
- JSON Server (for development)

## Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/CandleLearner-M/react-quiz.git
  cd react-quiz
  ```

2. Install dependencies:
  ```bash
  npm install
  ```

3. Start the development server:
  ```bash
  npm run dev
  ```

4. (Optional) Start the JSON server for development:
  ```bash
  npm run server
  ```

## Usage

- The app starts on a welcome screen with information about the quiz
- Click "Let's Start" to begin the quiz
- Answer each question by selecting one of the multiple-choice options
- The timer counts down - finish before time runs out!
- Your score is calculated based on correct answers
- At the end, you can see your score and try again

## Project Structure

```
react-quiz/
├── data/                   # JSON data for questions
├── src/
│   ├── assets/             # Static assets
│   ├── components/         # React components
│   ├── common/             # Shared utilities and types
│   ├── index.css           # Global styles
│   └── main.tsx            # Application entry point
├── public/                 # Public assets
└── package.json            # Project dependencies and scripts
```

### Key Components

- **App.tsx**: Main component orchestrating the application flow
- **Questions.tsx**: Displays individual questions with options
- **Timer.tsx**: Countdown timer component
- **FinishedScreen.tsx**: Shows final results and high score
- **Progress.tsx**: Displays progress through the quiz
- **Reducer.ts**: Contains application state management logic

## Building for Production

To build the application for production:

```bash
npm run build
```

The build files will be located in the `dist` directory.

## License

MIT License

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request