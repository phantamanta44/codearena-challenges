const chars = ['abcdefghijklmnopqrstuvwxyz$', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_'];
for (let i = 0; i < 100; i++) {
  const max = Math.floor(Math.random() * 9) + 2;
  const aLen = Math.floor(Math.random() * 5);
  const bLen = Math.floor(Math.random() * 5);
  let str = '', x = 0;
  for (let j = 0; j < aLen; j++) {
    str += chars[x][Math.floor(Math.random() * 27)].repeat(Math.floor(Math.random() * max));
    x ^= 1;
  }
  str += chars[x][Math.floor(Math.random() * 27)].repeat(max);
  x ^= 1;
  for (let j = 0; j < bLen; j++) {
    str += chars[x][Math.floor(Math.random() * 27)].repeat(Math.floor(Math.random() * max));
    x ^= 1;
  }
  Test.assertEquals(max, repeats(str));
}