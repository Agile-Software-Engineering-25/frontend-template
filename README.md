This is a template project. Fork it and customize it to your needs.

This project contains example use cases for all technologies listed below. (It is not pretty but that is not the point)

# Setup

Execute the following commands when you clone the project for the first time:

```bash
npm run init
npm i
```

# Commands

- `npm run dev` - to run a local dev server with hot reload
- `npm run build` - package the application
- `npm run cy:open` - open the UI of Cypress for testing
- `npm run cy:run` - run all tests with a headless browser

# Technologies

## File-Structure

```
├─ cypress/                             # Cypress end-to-end testing setup
│   ├─ e2e/                             # Test specifications for user flows
│   │   └─ home.cy.ts                   # Cypress test for the homepage
│   ├─ support/                         # Cypress configuration and custom commands
│   │   ├─ commands.ts                  # Custom Cypress commands
│   │   └─ e2e.ts                       # Cypress global setup (runs before each test)
│   ├─ screenshots/                     # Screenshots from failed tests
│   │   └─ image.png                    # Sample image
│   ├─ videos/                          # Videos from failed tests
│   │   └─ home.cy.ts.mp4               # Sample video
├─ src/                                 # Main application source code
│   ├─ @custom-types/                   # Custom global TypeScript type declarations
│   ├─ components/                      # Reusable UI components
│   │   └─ RoutingComponent/            # Folder for the UserInfoCard component
│   │       └─ RoutingComponent.tsx     # Implementation of the UserInfoCard component
│   ├─ hooks/                           # Custom React hooks
│   ├─ i18n/                            # Internationalization setup and translations
│   │   ├─ de-DE/                       # German language translations
│   │   │   └─ translation.json         # German translation strings
│   │   ├─ en-US/                       # English language translations
│   │   │   └─ translation.json         # English translation strings
│   │   └─ index.ts                     # i18n initialization and config
│   ├─ pages/                           # Top-level route components
│   │   ├─ Home/                        # Folder for the homepage
│   │   │   └─ Home.tsx                 # Implementation of the HomePage component
│   ├─ utils/                           # General utility/helper functions
│   ├─ App.tsx                          # Root app component, sets up routes/layout
│   └─ main.tsx                         # Application entry point (ReactDOM.render)
│   └─ config.ts                        # global application configurations (e.g. backend-base-url)
├─ cypress.config.ts                    # Cypress configuration file
├─ eslint.config.js                     # ESLint configuration for linting rules
├─ package.json                         # Project metadata and dependency definitions
├─ package-lock.json                    # Exact versions of installed dependencies
├─ README.md                            # Project documentation and setup instructions
├─ tsconfig.json                        # Global TypeScript configuration
└─ vite.config.js                       # Vite bundler and dev server configuration
```

## Understanding the React Architecture

React is a JavaScript library for building user interfaces using components, which are reusable building blocks that describe what you see on the screen. Components can have their own state (data that changes over time) using hooks like useState and can react to changes with useEffect. To share data across multiple components without passing it manually through each level, React provides context and providers, which let components "subscribe" to shared data. This makes it easy to manage and update the UI dynamically as the user interacts with it. Essentially, React breaks your app into small, smart pieces that handle their own logic and display.
Throughout this project, we will only use functional components (as they are easier to read and maintain).

## Used Tools

### Vite

Vite is a JavaScript build tool that will eventually build our React application into plain HTML, JavaScript, and CSS.
Config files: `vite.config.ts`

### i18n

I18n is a tool that helps us manage internationalization (managing multiple languages) by separating strings/texts from our components. This is done by putting them into a separate `translation.json` file for each language. In these JSON files, we can store labels and texts which we use throughout the application, and inside the application, we can refer to these translations using the JSON path within the files.
Config files: `src/i18n/index.ts`, `src/i18n/de-DE/translation.json`, `src/i18n/en-US/translation.json`

### ESLint

ESLint is a linting tool that helps us maintain good code quality and enforces code standards like "tab sizes." The `eslint.config.js` will be provided by the architect team and will already include our code conventions/standards.
Config files: `eslint.config.js`

### Cypress

Cypress is a testing tool that lets you write automated tests to make sure your web application behaves correctly in the browser. It runs directly in the browser, so you can see how your app behaves in real-time as the test runs. Cypress uses a clear and readable syntax to simulate user actions (like clicking buttons or typing) and check the results. It waits automatically for elements to appear and updates to happen, so tests are more reliable. Overall, Cypress helps you catch bugs early by testing your app the way a real user would interact with it.
Config files: `cypress.config.ts`

### React Router

React Router is a library that lets you add navigation to your React app, so users can move between pages (or "views") without reloading the page. It uses components like `and` to define which UI should be shown for each URL. Behind the scenes, it updates the browser's address bar and shows the right component based on the path. With nested routes, you can create layouts that change only parts of the page, and with hooks like `useNavigate`, you can control navigation in your code. React Router makes single-page applications feel like traditional multi-page websites.
Config files: `src/components/RoutingComponent.tsx`

### Axios

Axios is a JavaScript library for making HTTP requests, often used in React apps to talk to servers or APIs. It simplifies sending and receiving data (like JSON) with methods like axios.get() or axios.post(). Axios automatically handles common tasks like setting headers, converting responses, and error handling. It also supports promises, so you can use async/await to write clean, readable code. In short, Axios helps your app fetch or send data easily from other systems.

API docs: https://axios-http.com/docs/api_intro

### Custom Types

Organize your custom types and enums in dedicated files located in the `@types/` directory. In the `@types/` directory, you can put your `customTypes.ts` files and import them into your application.

# shared-components

This project uses a custom component library. $\to$ shared-components.

It is a git submodule located at the root of the project.

You can use the library as any other npm package. If you want to change anything on the library see the Contribution Documentation: [here will be a link to docusaurus](someLink)

# Todo

- finish README
  - add explanation of what we are doing with submodules + how to setup and interact with them
  - explain how to setup the application locally
- add submodule
- add shared components project

- Single spa
- add esling.config.js
- migrate to joi-ui
