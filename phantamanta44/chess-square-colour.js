const letters = "ABCDEFGH";
const squares = [...new Array(64).keys()].map(i => {
    const j = i % 8;
    i = (i - j) / 8;
    return {
      str: letters[i] + j.toString(),
      w: ((i + j) % 2) === 0,
    };
  });
while (squares.length > 0) {
  const square = squares.splice(Math.floor(Math.random() * squares.length), 1)[0];
  Test.assertEquals(square.w, isWhite(square.str));
}