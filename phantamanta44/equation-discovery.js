const gen = (a, b, c) => x => a*x*x + b*x + c;
const rand = () => Math.random() < 0.333 ? 0 : (Math.floor(Math.random() * 50) - 25);
for (let i = 0; i < 100; i++) {
  const c = [rand(), rand(), rand()];
  Test.assertDeepEquals(c, coeffs(gen(...c)));
}