var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function start(balance) {
  this.balance = balance;
  var name = rl.question("Hello! Welcome to Citibank! What is you name? ", function(name) {
    var decision = rl.question(name + ", would you like to see your balance, make a withdraw or make a deposit? ", function(decision){
      if (decision == "balance") {
        console.log("Your balance is $" + this.balance);
      } else if (decision == "withdraw") {
        this.balance = withdraw(this.balance);
      } else if (decision == "deposit") {
        this.balance = deposit(this.balance);
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
    //  rl.close();
    });
    // rl.close();
  });
}

function deposit(balance) {
  this.balance = balance;
  console.log(this.balance);
  console.log(balance);
  var amount = parseInt(rl.question("How much would you like to deposit? ", function(amount) {
    if (isPositive(amount)) {
      var newBalance = this.balance + amount;
      console.log(
        "Your new balance is $" +
          newBalance +
          ". Goodbye, thanks for banking with Citibank!"
      );
      return newBalance;
    } else {
      //if negative, prompts user to tryagain
      var tryAgain = rl.question("You amount was either a negative value. Would you like to try again? Enter yes or no ", function(tryAgain) {
        if (tryAgain == "Y") {
          deposit(this.balance);
        }
        rl.close();
      });
    }
   rl.close();
  }), 0);
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
// let KarunaAccount = new Account ("Karuna", 10000);
//
// KarunaAccount.greeting(10000);
