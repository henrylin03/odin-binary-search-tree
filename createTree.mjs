import createNode from "./createNode.mjs";

const sortAndDeduplicateArray = (inputArr) =>
  Float32Array.from([...new Set(inputArr)]).sort();

const createTree = (inputArr) => {
  const cleanedArr = sortAndDeduplicateArray(inputArr);
  const root = buildTree();

  function buildTree() {
    const sortedArrayToBST = (start, end) => {
      if (start > end) return null;

      const midIdx = parseInt((start + end) / 2);
      const node = createNode(cleanedArr[midIdx]);

      node.left = sortedArrayToBST(start, midIdx - 1);
      node.right = sortedArrayToBST(midIdx + 1, end);

      return node;
    };

    return sortedArrayToBST(0, cleanedArr.length - 1);
  }

  function insert(value) {
    const insertIntoBST = (rootNode, value) => {
      // base case: add node with value if tree empty OR space available on leaf
      if (rootNode === null) return createNode(value);

      // no duplicates allowed
      if (value === rootNode.data)
        return console.error(
          `Cannot insert value, ${value}, as it already exists in the binary search tree.`
        );

      if (value > rootNode.data)
        rootNode.right = insertIntoBST(rootNode.right, value);
      else rootNode.left = insertIntoBST(rootNode.left, value);

      return rootNode;
    };

    return insertIntoBST(root, value);
  }

  function deleteItem(value) {
    return;
  }

  function prettyPrint(node = root, prefix = "", isLeft = true) {
    if (node === null) return;
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  return { buildTree, deleteItem, insert, prettyPrint };
};

export default createTree;
