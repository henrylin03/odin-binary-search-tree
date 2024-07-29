import createTree from "./createTree.mjs";

const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const printData = (node) => console.log(node.data);

const tree = createTree(testArray);

tree.buildTree();
tree.prettyPrint();

// test levelOrder traversal
tree.preOrder(printData);