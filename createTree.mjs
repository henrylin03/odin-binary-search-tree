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
    const insertIntoBST = (rootNode, val) => {
      // base case: add node with value if tree empty OR space available on leaf
      if (rootNode === null) return createNode(val);

      // no duplicates allowed
      if (val === rootNode.data)
        return console.error(
          `Cannot insert value, ${val}, as it already exists in the binary search tree.`
        );

      if (val > rootNode.data)
        rootNode.right = insertIntoBST(rootNode.right, val);
      else rootNode.left = insertIntoBST(rootNode.left, val);

      return rootNode;
    };

    return insertIntoBST(root, value);
  }

  function deleteItem(value) {
    console.log(`
Deleting node with value = ${value}
    `);
    const getNextMinValue = (node) => {
      console.log(`finding the next largest value for node: ${node.data}...`);
      let res = node.data;
      console.log("initial res value:", res);

      // stop when there is no smaller value (no left subtree)
      while (node.left !== null) {
        res = node.left.data;
        node = node.left; // traverse down and left
      }

      console.log(`next largest value found: ${res}`);

      return res;
    };

    const deleteFromBST = (rootNode, val) => {
      if (rootNode === null) return rootNode;
      console.log(`Traversing to node with data: ${rootNode.data}`);

      if (val > rootNode.data)
        rootNode.right = deleteFromBST(rootNode.right, val);
      else if (val < rootNode.data)
        rootNode.left = deleteFromBST(rootNode.left, val);
      // if the node value matches, we've found the node for deletion
      else {
        // node with only one child or no child (is leaf node)
        if (rootNode.left === null) return rootNode.right;
        else if (rootNode.right === null) return rootNode.left;

        // node with 2 children -> get next largest in right subtree
        rootNode.data = getNextMinValue(rootNode.right);

        // delete that next largest value
        rootNode.right = deleteFromBST(rootNode.right, value);
      }

      return rootNode;
    };

    return deleteFromBST(root, value);
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
