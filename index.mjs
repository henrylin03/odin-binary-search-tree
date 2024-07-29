import createTree from "./createTree.mjs";

const testArray = [1, 2, 7, 4, 23, 8, 9, 10, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = createTree(testArray);

tree.buildTree(testArray);
tree.prettyPrint();
console.log(tree.isBalanced()); // expected true

// create an unbalanced tree by removing two levels on the right-most subtree
tree.deleteItem(6345);
tree.deleteItem(67);
tree.deleteItem(324);

tree.prettyPrint();
console.log(tree.isBalanced()); // expected false

// rebalancing
// tree.rebalance();
tree.prettyPrint();
console.log(tree.isBalanced()); // expected true
