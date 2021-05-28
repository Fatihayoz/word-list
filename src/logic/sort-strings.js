/**
 * Sorts an array of strings in different ways.
 * It does not modify the argument (no side-effects).
 *
 * @param {string[]} [toSort=''] - The array of strings to sort.
 * @param {string} [sortType='oldest'] - How to sort the strings, 6 options.
 * - oldest: from oldest to newest
 * - newest: from newest to oldest
 * - shortest: from shortest to longest
 * - longest: from longest to shortest
 * - a: alphabetical order
 * - z: reverse alphabetical order
 * if the sortType is not one of these 6 options, a copy of toSort is returned
 * @returns {string[]} a new sorted array containing the same strings as toSort
 */
export const sortStrings = (toSort = "", sortType = "oldest") => {
  const sorted = [...toSort];
  if (sortType === "newest") {
    return sorted.reverse();
  }
  if (sortType === "a") {
    return sorted.sort();
  }
  if (sortType === "z") {
    return sorted.sort().reverse();
  }
  if (sortType === "shortest") {
    return sorted.sort((a, b) => {
      return a.length - b.length;
    });
  }
  if (sortType === "longest") {
    return sorted.sort((a, b) => {
      return b.length - a.length;
    });
  }
  return sorted;
};
