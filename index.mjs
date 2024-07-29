import createTree from "./createTree.mjs";

const testArray = [1, 2, 7, 4, 23, 8, 9, 10, 4, 3, 5, 7, 9, 67, 6345, 324];
const printData = (node) => console.log(node.data);

const tree = createTree(testArray);

tree.buildTree();
tree.prettyPrint();

// test levelOrder traversal
tree.preOrder(printData); // expected: 8, 3, 1, 2, 5, 4, 7, 23, 9, 10, 324, 67, 6345
