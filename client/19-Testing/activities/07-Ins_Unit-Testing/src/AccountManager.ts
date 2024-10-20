export default class AccountManager {

  private userList: string[] = [];

  addAccount(username: string) : boolean {
    if (this.userList.includes(username)) {
      return false;
    }

    this.userList.push(username);
    return true;
  }

  removeAccount(username: string) : boolean {
    const index = this.userList.indexOf(username);
    if (index === -1) {
      return false;
    }

    this.userList.splice(index, 1);
    return true;
  }
}

// The Validate and AccountManager classes do not depend on any other components within the system.

// Thus, we can easily isolate them, making them conducive to unit testing.

// If one of our unit test cases fails, we can say with full confidence that the problem lies somewhere within that particular unit. 
// This helps significantly reduce diagnosis time, as we do not have to troubleshoot the entire system.
