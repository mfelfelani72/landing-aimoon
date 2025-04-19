export const arraysEqual = (array1, array2, nameLocal) => {
  // console.log(JSON.parse(localStorage.getItem(nameLocal)).length);
  // console.log(array1?.length)
  // console.log(array2?.length)
  if (array1?.length !== array2?.length) return false;
  else if (localStorage.getItem(nameLocal))
    if (array1?.length !== JSON.parse(localStorage.getItem(nameLocal)).length)
      return false;

  if (JSON.stringify(array1) === JSON.stringify(array2)) return true;
  return false;
};
