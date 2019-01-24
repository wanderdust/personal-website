import arraySplitter from '../../utils/arraySplitter';

describe('should recieve an array and split it into two', () => {
  test('should recieve one array and split it into two', () => {
    const testArray = [1, 2, 3, 4, 5];

    expect(arraySplitter(testArray)).toEqual([
      [1, 2, 3],
      [4, 5]
    ]);
  });

  test('should handle an empty array', () => {
    const testArray = [];

    expect(arraySplitter(testArray)).toEqual([[], []]);
  });

  test('should handle not crash when no values are introduced', () => {
    expect(arraySplitter()).toEqual([[], []]);
  });
});
