for (let i = 0; i < 250; i++) {
  const base = Math.floor(Math.random() * 2147482647) + 1000;
  const power = Math.floor(Math.random() * 2147483147) + 500;
  Test.assertEquals(Math.pow(base.toString().slice(-1), power.toString().slice(-2) % 4 || 4) % 10, last(base, power));
}