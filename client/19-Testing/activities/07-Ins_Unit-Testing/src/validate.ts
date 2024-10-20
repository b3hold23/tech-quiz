export default class Validate {

  isValidUsername(username: string) {
    if (username.length < 8) {
      return false;
    }

    // This regex pattern makes sure that a provided string is all lowercase
    const pattern = /^[a-z]*$/;
    return pattern.test(username);
  }

  isValidPassword(password: string) {
    if (password.length < 8) {
      return false;
    }
  
    // This regex pattern makes sure that a provided string has at least 1 uppercase, lowercase, and number.
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    return pattern.test(password);
  };
}

// The Validate and AccountManager classes do not depend on any other components within the system.

// Thus, we can easily isolate them, making them conducive to unit testing.

// If one of our unit test cases fails, we can say with full confidence that the problem lies somewhere within that particular unit. 
// This helps significantly reduce diagnosis time, as we do not have to troubleshoot the entire system.