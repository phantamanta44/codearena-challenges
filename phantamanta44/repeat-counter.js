const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_$';
for (let i = 0; i < 100; i++) {
  const max = Math.floor(Math.random() * 9) + 2;
  const aLen = Math.floor(Math.random() * 5);
  const bLen = Math.floor(Math.random() * 5);
  let str = '';
  for (let j = 0; j < aLen; j++) {
    str += chars[Math.floor(Math.random() * chars.length)].repeat(Math.floor(Math.random() * max));
  }
  str += chars[Math.floor(Math.random() * chars.length)].repeat(max);
  for (let j = 0; j < bLen; j++) {
    str += chars[Math.floor(Math.random() * chars.length)].repeat(Math.floor(Math.random() * max));
  }
  Test.assertEquals(max, repeats(str));
}