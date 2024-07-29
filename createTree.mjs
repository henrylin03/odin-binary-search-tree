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
    const getNextLargestData = (node) => {
      let res = node.data;

      // stop when there is no smaller value (no left subtree)
      while (node.left !== null) {
        res = node.left.data;
        node = node.left; // traverse down and left
      }

      return res;
    };

    const deleteFromBST = (rootNode, val) => {
      if (rootNode === null) return rootNode;

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
        const nextLargest = getNextLargestData(rootNode.right);
        rootNode.data = nextLargest;

        // delete that next largest value
        rootNode.right = deleteFromBST(rootNode.right, nextLargest);
      }

      return rootNode;
    };

    return deleteFromBST(root, value);
  }

  function find(value) {
    console.log("\nSearching node with value:", value);

    let currentNode = root;
    while (currentNode) {
      console.log(`Currently, we are on ${currentNode.data}`);
      if (currentNode.data === value) return currentNode;
      if (currentNode.data > value) currentNode = currentNode.left;
      else if (currentNode.data < value) currentNode = currentNode.right;
    }

    console.log(`Value, ${value}, was not found`);
    return null;
  }

  // bfs
  function levelOrder(callback) {
    if (arguments.length === 0 || typeof callback !== "function")
      throw new TypeError("Parameter is not a callback function!");

    const queue = [root];
    while (queue.length) {
      const currentNode = queue.shift();
      callback(currentNode);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  // dfs
  function preOrder(callback) {
    if (arguments.length === 0 || typeof callback !== "function")
      throw new TypeError("Parameter is not a callback function!");

    const traverse = (rootNode) => {
      if (rootNode === null) return;
      callback(rootNode);
      traverse(rootNode.left);
      traverse(rootNode.right);
    };

    return traverse(root);
  }

  function inOrder(callback) {
    if (arguments.length === 0 || typeof callback !== "function")
      throw new TypeError("Parameter is not a callback function!");

    const traverse = (rootNode) => {
      if (rootNode === null) return;
      traverse(rootNode.left);
      callback(rootNode);
      traverse(rootNode.right);
    };

    return traverse(root);
  }

  function postOrder(callback) {
    if (arguments.length === 0 || typeof callback !== "function")
      throw new TypeError("Parameter is not a callback function!");

    const traverse = (rootNode) => {
      if (rootNode === null) return;
      traverse(rootNode.left);
      traverse(rootNode.right);
      callback(rootNode);
    };

    return traverse(root);
  }

  // printing
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

  return {
    buildTree,
    deleteItem,
    find,
    inOrder,
    insert,
    levelOrder,
    preOrder,
    prettyPrint,
    postOrder,
  };
};

export default createTree;
