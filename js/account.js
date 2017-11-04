var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Account(balance) {
  this.balance = balance;

  open(balance) {
    console.log("Your Account has been created and the balance you have is $" + this.balance + ".");
    console.log("Goodbye, thanks for banking with Citibank!");
    rl.close();
  }

  close(balance) {
    console.log("Your Account has been closed and the balance you have is $" + this.balance + ".");
    console.log("Goodbye, thanks for banking with Citibank!");
    rl.close();
  }

  deposit(balance) {
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

  withdraw(balance) {
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

  isPositive(amount) {
    this.amount = amount;
    if (this.amount < 0) {
      console.log("You didn't enter a positive value!");
      return false;
    } else {
      return true;
    }
  }



}
