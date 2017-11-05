var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function run(balance) {
  this.balance = balance;
  var name = rl.question("Hello! Welcome to Citibank! What is you name? ", function(name) {
    transaction(name, balance);
  });
}

function transaction(balance) {
  var selection = rl.question("Would you like to: \n"
    + "1. See your balance \n"
    + "2. Open an account \n"
    + "3. Make a withdrawal \n"
    + "4. Make a deposit \n"
    + "5. Close an account \n"
    + "Please type in the number corresponding to the option. ", function(selection){
    if (selection == "1") {
      console.log("Your balance is $" + this.balance);
      rl.close();
      closingMessage();
    } else if (selection == "2") {
      this.balance = openAccount(this.balance);
    } else if (selection == "3") {
      this.balance = withdraw(this.balance);
    } else if (selection == "4") {
      this.balance = deposit(this.balance);
    } else if (selection == "5") {
      this.balance = closeAccount(this.balance);
    } else {
      restart();
    }
  });
}




function openAccount(balance) {
  this.balance = balance;
  console.log("Your Account has been created and the balance you have is $" + this.balance + ".");
  rl.close();
  closingMessage();
}

function closeAccount(balance) {
  this.balance = balance;
  console.log("Your Account has been closed and the balance you have is $" + this.balance + ".")
  rl.close();
  closingMessage();
}

function deposit(balance) {
  var amount = rl.question("How much would you like to deposit? ", function(amount) {
    this.balance = balance;
    if (isPositive(amount)) {
      var newBalance = parseInt(this.balance) + parseInt(amount);
      console.log("Your new balance is $" + newBalance + ".");
      rl.close();
      closingMessage();
      return newBalance;
    }
    else {
      var tryAgain = rl.question("Your amount was either a negative value. Would you like to try again? Enter yes or no. ", function(tryAgain) {
        if (tryAgain == "yes") {
          deposit(this.balance);
        } else {
          rl.close();
          closingMessage();
        }
      });
    }
  });
}

function withdraw(balance) {
  var amount = rl.question("How much would you like to withdraw? ", function(amount) {
    this.balance = balance;
    if (this.balance < amount) {
      var tryAgain = rl.question("Sorry, your balance of $" + this.balance +
      " is too low to withdraw that amount. Would you like to try again? Enter yes or no. ", function(tryAgain) {
        if (tryAgain == "yes") {
          withdraw(this.balance);
        } else {
          rl.close();
          closingMessage();
        }
      });
    }
    else if (isPositive(amount)) {
      var newBalance = parseInt(this.balance) - parseInt(amount);
      console.log("Your new balance is $" + newBalance + ".");
      rl.close();
      closingMessage();
      return newBalance;
    }
    else {
      var tryAgain = rl.question(
        "Your amount was either a negative value. Would you like to try again? Enter yes or no. ", function(tryAgain) {
          if (tryAgain == "yes") {
            withdraw(this.balance);
          } else {
            rl.close();
            closingMessage();
          }
      });
    }
  });
}

function isPositive(amount) {
  this.amount = amount;
  if (this.amount < 0) {
    console.log("You didn't enter a positive value!");
    return false;
  } else {
    return true;
  }
}

function closingMessage() {
  console.log("Goodbye, thanks for banking with Citibank!");
}

function restart() {
  var restart = rl.question("You did not make an appropriate selection, start from the beginning? Enter in yes, or no. " , function(restart) {
    if (restart == "yes") {
      run(this.balance);
    }
    else {
      rl.close();
      closingMessage();
    }
  });
}

run(100);
