import AccountManager from './AccountManager.js';
import Validate from './validate.js';

const accountManager = new AccountManager();
const validate = new Validate();

const username1 = 'firstuser';
const password1 = 'Password123';

if (validate.isValidUsername(username1) && validate.isValidPassword(password1)) {
  accountManager.addAccount(username1);
  console.log(`${username1} successfully added.`);
}

const username2 = 'seconduser';
const password2 = 'Password456';

if (validate.isValidUsername(username2) && validate.isValidPassword(password2)) {
  accountManager.addAccount(username2);
  console.log(`${username2} successfully added.`);
}

accountManager.removeAccount(username2);

// Because unit testing does not require the entire system to be in place, we can begin to create unit test cases 
// right from the very beginning and throughout application development.

// Developers are able to test and verify new functionality in isolation, before introducing it into the overall system.

// When a unit test case fails, we know exactly where to look for the problem, saving the time of the extended diagnosis 
// that would otherwise likely have been required later in the process.
