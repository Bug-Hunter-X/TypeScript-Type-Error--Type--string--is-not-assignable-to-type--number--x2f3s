function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error("Inputs must be numbers!");
    return 0; // Or throw an error
  }
}

let result1 = addSafe(5, 10);  // Correct usage
let result2 = addSafe(5, '10'); // Safe handling of incorrect input
let result3 = addSafe('5', 10); // Safe handling of incorrect input