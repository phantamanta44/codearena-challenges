for (let i = 0; i < 30; i++) {
  const length = Math.floor(Math.random() * 50) + 3;
  let node = {next: null};
  const root = node;
  for (let j = 0; j < length; j++) node = {next: node};
  root.next = node;
  let tail = Math.floor(Math.random() * 30) + 5;
  while (tail--) node = {next: node};
  Test.assertEquals(length, loop(node));
}