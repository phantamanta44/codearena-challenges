for (let k = 0; k < 10; k++) {
  n = Math.floor(Math.random() * 7);
  let f = (a) => a * 2;
  for (let i = 0; i < n; i++) f = ((f) => (a) => f(a))(f);
  Test.assertEquals(n, unnest(f));
}