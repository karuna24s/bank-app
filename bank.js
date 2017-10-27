var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.greeting = function(amount) {
  console.log("Welcome to Citibank! How can I help you today?");
  rl.question("Hello! What is you name? ", function(answer) {
    console.log(answer + ", would you like to see your balance, make a withdraw or make a deposit?");

  rl.close();
});
}

Account.prototype.deposit = function(amount) {
  if (this._isPositive(amount)) {
    this.balance += amount;
    console.log(`Deposit: ${this.name} new balance is ${this.balance}`);
    return true;
  }
  return false;
}

Account.prototype.withdraw = function(amount) {
  if (this._isAllowed(amount)) {
    this.balance -= amount;
    console.log(`Withdraw: ${this.name} new balance is ${this.balance}`);
    return true;
  }
  return false;
}

Account.prototype.transfer = function(amount, account) {
  if (this.withdraw(amount) && account.deposit(amount)) {
    console.info(`Transfer: ${amount} has been moved from ${this.name} to ${account.name}`);
    return true;
  }
  return false;
}


Account.prototype._isPositive = function(amount) {
  const isPositive = amount > 0;
  if (!isPositive) {
    console.error('Amount must be positive!');
    return false;
  }
  return true;
}

Account.prototype._isAllowed = function(amount) {
  if (!this._isPositive(amount)) return false;

  const isAllowed = this.balance - amount >= 0;
  if (!isAllowed) {
    console.error('You have insufficent funds!');
    return false;
  }
  return true;
}

let KarunaAccount = new Account ("Karuna", 10000);

KarunaAccount.greeting(10000);
