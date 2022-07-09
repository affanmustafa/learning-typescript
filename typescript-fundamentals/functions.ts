function add(num1: number, num2: number) {
  return num1 + num2;
}

function printResult(num: number): void {
  console.log("Result is " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (results) => {
  console.log(results);
});

// let combineValues: Function; // Function Type
let combineValues: (a: number, b: number) => number; // Function Type. Brackets show the type of arguemnts and after the => shows the type of return value
