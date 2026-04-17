export const arrayMove = (arr, from, to) => {
  const copy = [...arr];
  if (from < 0 || to < 0) return arr;
  const [item] = copy.splice(from, 1);
  copy.splice(to, 0, item);
  return copy;
};