for (let i = 0; i < 100; i++) {
  const a = Math.random() * 100;
  const b = Math.random() * 98 + 2;
  Test.assertApproxEquals(Math.log(a) / Math.log(b), logarithm(a, b));
}