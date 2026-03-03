# React Checkpoint App

This repository contains a simple React application bootstrapped with **Vite**. It demonstrates
the use of **react-bootstrap** components such as a navbar, cards, forms, and basic layout.

The original instructions for this project were:

> After creating the react-app, delete all files in the `src` folder except for
> `reportWebVitals.js` and `index.js` (adapted to Vite's `main.jsx`).
> Create a new file called `App.js` containing this project's App component.
> Import everything needed, including react-bootstrap.
> Use bootstrap added to the React project and follow react-bootstrap get started docs.
> Inside the App component use a fragment, a div with className "App", a navbar, heading,
> three cards, and a bootstrap form. Add comments in the code and provide a matching README.

This README is the matching documentation for the finished application.

## Dependencies

The project comes with the following dependencies already installed:

```json
"dependencies": {
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "bootstrap": "^5.3.8",
  "react-bootstrap": "^2.10.10"
}
```

Bootstrap's CSS is imported in `src/main.jsx` so the components render with correct styling.

## Available Scripts

In the project directory, you can run:

```bash
npm install        # install dependencies (react, react-bootstrap etc.)
npm run dev        # start development server (Vite)
npm run build      # build for production
npm run preview    # preview the production build
npm run lint       # run ESLint over the source
```

## Project Structure

```
src/
  main.jsx          # entry point; imports bootstrap css and App component
  App.js            # main application component (navbar, form, cards)
  index.css         # custom global styles
```

## Features

- **Navbar**: A dark-themed responsive navbar with links.
- **Heading**: Page title rendered within a container.
- **Form**: A simple contact form using `react-bootstrap`'s `Form` component.
- **Cards**: Three example cards showcasing projects with images and buttons.

Comments are placed throughout the `App.js` file to explain the structure and
usage of react-bootstrap components.

## Notes

This project is intentionally small and meant as a learning checkpoint for
using React together with react-bootstrap under a Vite-powered setup.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
