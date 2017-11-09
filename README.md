# CodeArena Challenge Repository
This is where those coding challenges are stored!

## Submit Your Own!
Want to create your own coding challenges? Make a pull request to this repository! If you don't already have one, create a subdirectory named after yourself -- this is your "namespace". Inside this folder, write a JSON document (let's say `multiply.json`) that looks like this:
```json
{
  "name": "multiply",
  "desc": "Write a function `mult(a: Integer, b: Integer): Integer` that multiplies two integers and returns the result."
}
```
...and a JavaScript file (`multiply.js` in this case) with your tests, like this:
```js
for (let i = 0; i < 100; i++) {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  Test.assertEquals(a * b, mult(a, b));
}
```
Then you should add your challenge to the appropriate index file (`0.json` through `4.json`), following the format already present.

In general, you should follow these guidelines when writing a problem:
* Be as specific as possible in your description. List any and all nuances that the test taker should know of!
* Make sure to implement random tests!
* Don't write trivial problems, but don't write anything that will take more than 2000 characters to solve either!
* If *you* can't solve it, you shouldn't be submitting it!

## Testing Framework
The testing framework is a simplified version of the [CodeWars JavaScript testing framework](https://github.com/Codewars/codewars.com/wiki/Codewars-JavaScript-Test-Framework). It comes with the following methods:
* `Test.assertEquals(expected, actual, [message])` - Tests a value for absolute equality (`===`) with another.
* `Test.assertNotEquals(unexpected, actual, [message])` - The negation of the above.
* `Test.assertDeepEquals(expected, actual, [message])` - Tests a value for deep equality. Useful for Objects and Arrays.
* `Test.assertNotDeepEquals(unexpected, actual, [message])` - The negation of the above.
* `Test.assertApproxEquals(expected, actual, [message])` - Tests for floating-point equality within a reasonably small margin of error.
* `Test.assertNotApproxEquals(unexpected, actual, [message])` - The negation of the above.
* `Test.assertContains(expected, container, [message])` - Tests a container for an element.
* `Test.assertNotContains(unexpected, container, [message])` - The negation of the above.
* `Test.expectError(func, [message])` - Tests for the provided function to throw an error.
* `Test.expectNoError(func, [message])` - The negation of the above.
* `Test.expect(value, [message])` - Tests for the truthy-ness of a value.
* `Test.fail()` - Fails a test.
At the moment, no facilities exist for partitioning tests into categories (i.e. `describe` or `it`).
