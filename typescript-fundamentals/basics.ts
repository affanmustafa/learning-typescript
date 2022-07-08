function add(num1: number, num2: number, showResult: boolean, phrase: string) {
  const answer = num1 + num2;
  if (showResult) {
    console.log(phrase + answer);
  } else return answer;
}

const number1 = 10;
const number2 = 20;
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(number1, number2, printResult, resultPhrase);

console.log(result);
