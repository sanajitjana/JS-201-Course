import time from "./time-to-string.js";

test("Milliseconds to String (5 seconds)", () => {
  expect(time(5200)).toEqual("5 seconds");
});

test("Milliseconds to String (1 minute)", () => {
  expect(time(60000)).toEqual("1 minute");
});

test("Milliseconds to String (3 minute)", () => {
  expect(time(180000)).toEqual("3 minute");
});

test("Milliseconds to String (3 minutes 20 seconds)", () => {
  expect(time(200000)).toEqual("3 minutes 20 seconds");
});
