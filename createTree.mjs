const createTree = (arr) => {
  const root = buildTree(arr);

  function buildTree(inputArr) {
    return inputArr;
  }

  return { buildTree };
};

export default createTree;
