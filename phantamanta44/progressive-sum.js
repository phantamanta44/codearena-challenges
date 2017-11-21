for (let i = 0; i < 50; i++) {
  const sum = createSum();
  const num = Math.floor(Math.random() * 25) + 25;
  let total = 0;
  for (let j = 0; j < num; j++) {
    const summand = Math.floor(Math.random() * 50);
    total += summand;
    Test.assertEquals(total, sum(summand));
  }
}