import createNode from "./createNode.mjs";

const createTree = (arr) => {
  const root = buildTree(arr);

  function buildTree() {
    const newNode = createNode();
    return newNode;
  }

  const prettyPrint = (node = root, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  return { buildTree, prettyPrint };
};

export default createTree;
