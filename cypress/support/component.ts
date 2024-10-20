// Add global configurations or custom commands for component tests here
import './commands'
import { mount } from 'cypress/react';

declare global {
    namespace Cypress {
        interface Chainable {
            mount: typeof mount;
        }
    }
}

Cypress.Commands.add('mount', { prevSubject: false }, mount);
