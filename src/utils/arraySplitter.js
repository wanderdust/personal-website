// Splits an array of items into two arrays
// this way we can render them into two columns.
export const arraySplitter = (iterable = []) => {
  const splitIndex = Math.ceil(iterable.length / 2);
  const colOne = iterable.slice(0, splitIndex);
  const colTwo = iterable.slice(splitIndex);

  return [colOne, colTwo];
};

export default arraySplitter;
