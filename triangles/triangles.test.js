// DON'T WORRY ABOUT WRITING THESE TESTS!

// This test file is just here for you to help you think about
// how you can break apart the logic of the application into
// smaller, more easily testable pieces.

it('should validate edge lengths', function () {
  expect(validateEdge(2)).toBe(true);
  expect(validateEdge(1)).toBe(false);
  expect(validateEdge("")).toBe(false);
});

it('should calculate areas', function () {
  expect(calculateArea(2,2)).toBe(2);
  expect(calculateArea(10,2)).toBe(10);
});

it('should calculate hypotenuses', function () {
  expect(calculateHypotenuse(3,4).toBe(5));
});

it('should craft correct message', function () {
  // we'd like to have tests like this:
  //
  // expect(printHypotenuseAndArea(5, 6)).toEqual(
  //     "Hypotenuse is 5 and area is 6.");
  //
  // TODO test "big triangles" here
});

it('should generate correct results', function () {
  // we'd like to have tests like this:
  //
  // expect(getResultsFromSideLengths(3, 4)).toEqual(
  //   {aMsg: "", bMsg: "", msg: "Hypotenuse is 5 and area is 6."});
  //
  // TODO test an invalid submission here
});
