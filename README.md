# The Almost Final Countdown

A React-based timer challenge game where players test their timing skills by stopping the timer as close to the target time as possible. This is a learning project focused on mastering React hooks, refs, and portals.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [How to Play](#how-to-play)
- [Project Structure](#project-structure)
- [Key Concepts Demonstrated](#key-concepts-demonstrated)

## About

**The Almost Final Countdown** is an interactive game that challenges players to estimate time intervals accurately. Players must stop the timer before it runs out, aiming to get as close to the target time as possible to maximize their score. The project demonstrates fundamental React concepts including state management, refs, imperative handles, and React portals.

## Features

- **Player Customization**: Set your player name before starting the challenges
- **Multiple Difficulty Levels**: Four challenge levels with varying target times:
  - Easy: 1 second
  - Medium: 5 seconds
  - Hard: 10 seconds
  - Insane: 15 seconds
- **Real-time Timer**: Precise timer tracking with 10ms intervals
- **Score Calculation**: Dynamic scoring based on how close you stop to the target time
- **Result Modal**: Displays game results using React portals
- **Visual Feedback**: Active/inactive timer status indicators

## Tech Stack

- **React** (v19.0.0) - UI library
- **React DOM** (v19.0.0) - DOM rendering
- **Vite** (v7.3.1) - Build tool and development server
- **ESLint** - Code linting and quality enforcement

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone or download the repository

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## How to Play

1. **Enter Your Name**: Type your name in the input field and click "Set Name"

2. **Choose a Challenge**: Select a difficulty level based on the target time

3. **Start the Timer**: Click the "Start Challenge" button to begin the countdown

4. **Stop at the Right Time**: Click "Stop Challenge" when you think the target time has elapsed

5. **View Your Results**: A modal will display:
   - Whether you won or lost
   - Your score (if you stopped in time)
   - How much time was remaining

6. **Try Again**: Close the modal to reset and attempt the challenge again

## Project Structure

```
01-starting-project/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── Player.jsx           # Player name input component
│   │   ├── TimerChallenge.jsx   # Timer challenge component
│   │   └── ResultModal.jsx      # Result display modal
│   ├── assets/          # Images and other assets
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Project dependencies
└── vite.config.js       # Vite configuration
```

## Key Concepts Demonstrated

### React Hooks

- **useState**: Managing component state for timer values and player name
- **useRef**: Creating references to DOM elements and storing mutable values
- **useImperativeHandle**: Exposing custom methods to parent components

### Advanced React Patterns

- **React Portals**: Rendering the result modal outside the component hierarchy using `createPortal()`
- **Refs with DOM Elements**: Direct DOM manipulation for form inputs and dialog elements
- **Ref Forwarding**: Passing refs between components to control child component methods

### Timer Management

- **setInterval**: Implementing precise timer countdown with 10ms intervals
- **clearInterval**: Properly cleaning up timers to prevent memory leaks
- **Conditional Rendering**: Displaying different UI states based on timer activity

### Component Communication

- **Props**: Passing data between parent and child components
- **Callback Functions**: Handling events and state updates across components
- **Imperative API**: Using `useImperativeHandle` to expose the modal's `open()` method

---

**Note**: This is a learning project created for educational purposes and does not include a license.
