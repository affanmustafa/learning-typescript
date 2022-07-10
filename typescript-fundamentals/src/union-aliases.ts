type combinable = number | string;

function add(
  input1: combinable,
  input2: combinable,
  conversionType: "as-number" | "as-string"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    conversionType === "as-number"
  ) {
    result = +input1 + +input2; //converts into number
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = add(20, 30, "as-number");
console.log(combinedAges);

const combinedNames = add("Affan", "Mustafa", "as-string");
console.log(combinedNames);
