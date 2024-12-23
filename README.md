# React + Vite Todo List App

This template provides a minimal setup for creating a React application with Vite, featuring Hot Module Replacement (HMR) and essential ESLint rules for code quality.

## Features

- **Hot Module Replacement (HMR):** Enabled by Vite for instant updates during development.
- **Two Plugin Options:**
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) using [Babel](https://babeljs.io/) for fast refresh.
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) using [SWC](https://swc.rs/) for optimized performance.

## Technologies Used

- **React:** For building the user interface.
- **Vite:** For fast development and build tooling.
- **Tailwind CSS:** For responsive and modern styling.
- **React Icons:** For adding intuitive and attractive icons.
- **uuid:** For generating unique identifiers for todos.

## Installation and Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Sambarr3/iTask-Todo-List-App.git
   cd iTask-Todo-List-App
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   ```

4. **Open the Application** Navigate to [http://localhost:5173](http://localhost:5173) in your browser.

## Code Overview

### **Main Components**

- **App Component:**
  - Manages the state for todos.
  - Handles user interactions (add, edit, delete todos).
  - Renders the overall UI.
- **Navbar Component:**
  - Provides a simple navigation bar at the top of the app.

### **State Management**

- Todos are managed using React's `useState` hook.
- The `useEffect` hook is used to persist todos in local storage for continuity.

### **Unique ID Generation**

- The `uuid` library ensures every todo has a unique ID for seamless list management.

### **Custom Styling**

- Tailwind CSS is used for all styling, offering:
  - Modern and clean input fields with focus and transition effects.
  - Styled buttons that align with input fields and include hover animations.
  - A minimalist "Show Finished" checkbox design for visual clarity.

## Contribution

Contributions are welcome! You can:

1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request with your improvements.

Feedback and suggestions are greatly appreciated to make this app even better!

## License

This project is licensed under the **MIT License**, allowing you to freely use, modify, and distribute the code.
Feel free to fork this repository and contribute by submitting a pull request. Any feedback or suggestions are welcome!


