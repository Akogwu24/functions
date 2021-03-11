//A function that takes three parameters and performs mathemathical operation on them depending on the users need
function mathemathicalOperations(firstNumber, secondNumber, operation) {
  //for  multiplication
  if (operation == "multiply" || operation == "Multiply") {
    const productOfNumbers = firstNumber * secondNumber;
    console.log(
      "The Product of the first number and the second number is " +
        productOfNumbers
    );
    return;

    //for division
  } else if (operation == "divide" || operation == "Divide") {
    const divisionOfFirstNumberBySecondNumber = firstNumber / secondNumber;
    console.log(
      "The Result of the Divicion of first number by the second number is " +
        divisionOfFirstNumberBySecondNumber
    );
    return;

    //for Addition
  } else if (operation == "add" || operation == "Add") {
    const sumOfNumber = firstNumber + secondNumber;
    console.log("The Sum is " + sumOfNumber);
    return;

    //for Subtraction
  } else if (operation == "subtract" || operation == "Subtract") {
    const differenceOfNumbers = firstNumber - secondNumber;
    console.log(
      "The Difference between the first number and the second number is " +
        differenceOfNumbers
    );
    return;

    //for any other operation outside the ones catered for
  } else {
    console.log(
      "Sorry you have not an Opertion to perform \nKindly Input the type of Operation you want to implement"
    );
  }
}
mathemathicalOperations(2, 5, " ");
