# Catch Design Take Home Assignment - GitHub Repositories Display

## Overview
A web application that displays GitHub repositories from the GitHub organization. Users can browse repositories with pagination, view key repository information including stars, forks, and language.

<img width="2508" height="6196" alt="localhost_5173_" src="https://github.com/user-attachments/assets/3c8c55c7-b097-4009-a221-c8c46badc5bc" />

## Installation
_Below is an example of how you can instruct your audience on installing and setting up your app._

1. Clone the repo
   ```sh
   https://github.com/jlbmontejano/catch-design-tha.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the app
   ```sh
   npm run dev
   ```

## Tech Stack
* React 18
* TypeScript
* Tailwind CSS
* Vite (build tool)

## Future Improvements
This web app was built with a focus on core functionality and minimal design, so there's room for optimization. Given more time, I would prioritize the following improvements:
* **Mobile-first approach** - The current design is desktop-optimized. A mobile-first redesign would include responsive navigation and improved touch interactions
* **Component refactoring** - Break down larger components into smaller, reusable pieces (e.g., dedicated `<Loading />` and `<ErrorMessage />` components)
* **Enhanced UI/UX** - Improve visual feedback for loading and error states, add skeleton loaders, and refine the overall styling
* **Performance optimization** - Implement caching, debouncing for user interactions, and lazy loading where applicable
