import tax from "./tax_calculator.js";

test("Calculate tax", () => {
  expect(tax(250000, 40000)).toEqual("No tax applicable");
});
test("Calculate tax", () => {
  expect(tax(500000, 40000)).toEqual(48000);
});
test("Calculate tax", () => {
  expect(tax(750000, 40000)).toEqual(97600);
});
test("Calculate tax", () => {
  expect(tax(1000000, 40000)).toEqual(147600);
});
test("Calculate tax", () => {
  expect(tax(1500000, 40000)).toEqual(298800);
});
test("Calculate tax", () => {
  expect(tax(2000000, 40000)).toEqual(448800);
});

// npm test report
// console.log(calculateTax(250000, 40000)); // No tax applicable
// console.log(calculateTax(500000, 40000)); // 48000
// console.log(calculateTax(750000, 40000)); // 97600
// console.log(calculateTax(1000000, 40000)); // 147600
// console.log(calculateTax(1500000, 40000)); // 298800
// console.log(calculateTax(2000000, 40000)); // 448800
