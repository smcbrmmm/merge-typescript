import { merge } from "../index";


describe('Testing merge function', () => {
  test('expected value is true with all value is greater or equal 0', () => {
    expect(merge([0,1,3,2,4],[2,3,4,5,0])).toStrictEqual([0,0,1,2,2,3,3,4,4,5]);
  }),
  test('expected value is true with all value is comprise of negative value', () => {
    expect(merge([1, 3, 5, 7],[-2, 1, 12, 4, -4, 6])).toStrictEqual([-4,-2,1,1,3,4,5,6,7,12]);
  });
});
