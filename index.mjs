import createTree from "./createTree.mjs";

const testArray = [1, 2, 7, 4, 23, 8, 9, 10, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = createTree(testArray);

tree.buildTree();
tree.prettyPrint();

console.log(tree.isBalanced()); // expected true

// TODO: CREATE AN UNBALANCED TREE AND THEN TEST

//TODO: CREATE A BALANCED TREE AND TEST
console.log(tree.isBalanced()); // expected true
