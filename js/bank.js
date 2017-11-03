var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function start(balance) {
  this.balance = balance;
  var name = rl.question("Hello! Welcome to Citibank! What is you name? ", function(name) {
    var decision = rl.question(name + ", would you like to open an account, see your balance, make a withdrawal, mmake a deposit or close an account? ", function(decision){
      if (decision == "balance") {
        console.log("Your balance is $" + this.balance);
        console.log("Goodbye, thanks for banking with Citibank!");
        rl.close();
      } else if (decision == "withdraw") {
        this.balance = withdraw(this.balance);
      } else if (decision == "deposit") {
        this.balance = deposit(this.balance);
      } else if (decision == "open an account") {
        this.balance = open(this.balance);
      } else if (decision == "close an account") {
        this.balance = close(this.balance);
      }
      else {
        var restart = rl.question("You did not make an appropriate decision, start from the beginning? Enter in yes, or no " , function(answer) {
          if (restart == "yes") {
            start(this.balance);
          } else {
            console.log("Goodbye, thanks for banking with Citibank!");
            }
           rl.close();
        });
      }
    });
  });
}

function open(balance) {
  // need to add input here
  console.log("Your Account has been created and the balance you have is $" + this.balance + ".");
  console.log("Goodbye, thanks for banking with Citibank!");
  rl.close();
}

function close(balance) {
  // need to add input here
  console.log("Your Account has been closed and the balance you have is $" + this.balance + ".");
  console.log("Goodbye, thanks for banking with Citibank!");
  rl.close();
}

function withdraw(balance) {
  // this.balance = balance;
  var amount = rl.question("How much would you like to withdraw?", function(amount) {
    this.balance = balance;
    //check if balance is greater than withdrawal amt
    if (this.balance < amount) {
      var tryAgain = rl.question("Sorry, your balance of $" + this.balance +
      " is too low to withdraw that amount. Would you like to try again? Enter yes or no ", function(tryAgain) {
        if (tryAgain == "yes") {
          withdraw(this.balance);
        } else {
          console.log("Goodbye, thanks for banking with Citibank!");
          rl.close();
        }
      });
      //check if amount is positive
    } else if (isPositive(amount)) {
      var newBalance = parseInt(this.balance) - parseInt(amount);
      console.log(
        "Your new balance is $" +
          newBalance +
          ". Goodbye, thanks for banking with Citibank!"
      );
      rl.close();
      return newBalance;
    } else {
      //prompt user to try again, if negative
      var tryAgain = rl.question(
        "You amount was either a negative value. Would you like to try again? Enter yes or no ", function(tryAgain) {
          if (tryAgain == "yes") {
            withdraw(this.balance);
          } else {
            console.log("Goodbye, thanks for banking with Citibank!");
            rl.close();
          }
      });
    }
  });
}

function deposit(balance) {
  var amount = rl.question("How much would you like to deposit? ", function(amount) {
    this.balance = balance;
    if (isPositive(amount)) {
      var newBalance = parseInt(this.balance) + parseInt(amount);
      console.log(
        "Your new balance is $" +
          newBalance +
          ". Goodbye, thanks for banking with Citibank!"
      );
      rl.close();
      return newBalance;
    } else {
      //if negative, prompts user to tryagain
      var tryAgain = rl.question("You amount was either a negative value. Would you like to try again? Enter yes or no ", function(tryAgain) {
        if (tryAgain == "yes") {
          deposit(this.balance);
        } else {
          console.log("Goodbye, thanks for banking with Citibank!");
          rl.close();
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

start(100);
