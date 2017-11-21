for (let i = 0; i < 50; i++) {
  const array = [];
  let s2z = false;
  const seen = new Set();
  let sum = 0;
  const len = Math.floor(Math.random() * 2500) + 2500;
  if (Math.random() < 0.5) {
    for (let j = 0; j < len; j++) {
      let num = 0;
      while (true) {
        num = Math.floor(Math.random() * len * 20) - len * 10;
        if (num != 0 && !seen.has(sum + num)) break;
      }
      array.push(num);
      sum += num;
      seen.add(sum);
    }
  } else {
    for (let j = 0; j < len; j++) {
      let num = 0;
      while (!num) num = Math.floor(Math.random() * len * 20) - len * 10;
      array.push(num);
      if (!s2z) {
        sum += num;
        if (seen.has(sum)) s2z = true;
        seen.add(sum);
      }
    }
  }
  Test.assertEquals(s2z, sumsToZero(array));
}