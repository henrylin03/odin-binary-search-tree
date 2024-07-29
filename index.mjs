import createTree from "./createTree.mjs";

const testArray = [1, 2, 7, 4, 23, 8, 9, 10, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = createTree(testArray);

tree.buildTree();
tree.prettyPrint();

console.log(tree.depth(tree.find(8))); // expected: 0
console.log(tree.depth(tree.find(23))); // expected: 1
console.log(tree.depth(tree.find(6345))); // expected: 3
// console.log(tree.depth(tree.find(-6969))); // expected: error
