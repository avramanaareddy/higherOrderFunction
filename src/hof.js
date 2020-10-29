export const hof = (a) => (b) => a + b;

export default function hof2(a) {
  return function (b) {
    return a + b;
  };
}
