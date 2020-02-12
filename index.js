const LETTERS_COUNT = 2;
const EMPTY_SYMBOL = "-";
const LETTER_SYMBOL = "*";

// create an object constructor
function LogoBuilder(lettersCount, emptySymbol, letterSymbol) {
  this.lettersCount = lettersCount;
  this.emptySymbol = emptySymbol;
  this.letterSymbol = letterSymbol;
  this.n = undefined;
}
// create function to call the bulder
LogoBuilder.prototype.init = function () {
  let input = prompt("Enter the the prefered size from 3 to 10000:");
  // route to next step depends of validation
  const isValid = this.isValidInput(input);
  if (isValid) {
    this.n = Math.floor(input);
    this.buildLogo();
  } else {
    logoBuilder.init();
  }
};
// create rules for validation
LogoBuilder.prototype.isValidInput = function (input) {
  
  if (input === null) {
    alert("Goodbye!");
  } else if (input === "") {
    alert("The field can not be empty!");
    return false;
  } else if (isNaN(input)) {
    alert("You should enter a valid number!");
    return false;
  } else if (
    Math.floor(input) < 2 ||
    Math.floor(input) > 10000 ||
    input % 2 === 0
  ) {
    alert("Make shure that number is odd and between 3 and 10000");
    return false;
  }
  return true;
};
// build logo
LogoBuilder.prototype.buildLogo = function () {
  
  const N = this.n;
  const emptySymbol = this.emptySymbol;
  const letterSymbol = this.letterSymbol;
  const lettersCount = this.lettersCount;

  for (let i = 0; i <= N; i++) {
    let str = "";
    if (i <= (N - 1) / 2) {
      str =
        emptySymbol.repeat(N - i) +
        letterSymbol.repeat(N + 2 * i) +
        emptySymbol.repeat(N - 2 * i) +
        letterSymbol.repeat(N + 2 * i) +
        emptySymbol.repeat(N - i);     
    }
    else {
      str =
        emptySymbol.repeat(N - i) +
        letterSymbol.repeat(N) +
        emptySymbol.repeat(2 * i - N) +
        letterSymbol.repeat(3 * N - 2 * i) +
        emptySymbol.repeat(2 * i - N) +
        letterSymbol.repeat(N) +
        emptySymbol.repeat(N - i);      
    }
    console.log(str.repeat(lettersCount));
  }
};


const logoBuilder = new LogoBuilder(LETTERS_COUNT, EMPTY_SYMBOL, LETTER_SYMBOL);
logoBuilder.init();
