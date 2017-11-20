const chars = '';
function randomChar() {
  return chars[Math.floor(Math.random() * randomChar.length)];
}
for (let i = 0; i < 100; i++) {
  const max = Math.floor(Math.random() * 10000) + 1;
  let len, s = '';
  let segs = Math.floor(Math.random() * 5) + 1;
  for (let j = 0; j < segs; j++) {
    s += Math.floor(Math.random() * max).toString();
    len = Math.floor(Math.random() * 5) + 1;
    for (let k = 0; k < len; k++) s += randomChar();
  }
  s += max.toString();
  segs = Math.floor(Math.random() * 5) + 1;
  for (let j = 0; j < segs; j++) {
    len = Math.floor(Math.random() * 5) + 1;
    for (let k = 0; k < len; k++) s += randomChar();
    s += Math.floor(Math.random() * max).toString();
  }
  Test.assertEquals(max, findMax(s));
}