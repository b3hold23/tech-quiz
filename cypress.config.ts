 // Runs the application using imports from lib/
 import { defineConfig } from "cypress";

 export default defineConfig({
    component: {
        devServer: {
            framework: "react",
            bundler: "vite",
        },
        specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'cypress/support/component.ts',
    },

    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: "http://localhost:3000",
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'cypress/support/e2e.ts',
    }
 });
 
