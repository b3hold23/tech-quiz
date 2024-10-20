import { setupWorker } from 'msw/browser';
import { handlers } from './movieRoutes'

// Instead, we are sending mock data with the Mock Service Worker (msw) package. 
// This package is a mocking library for the browser and Node.js.

// Here, we are using msw in a browser environment ,so that we can mock data in our application.

// We will also set up msw to run in our test environment, so we can run our tests with mock data as well.

export const worker = setupWorker(...handlers);
