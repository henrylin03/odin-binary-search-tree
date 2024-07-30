import createTree from "./createTree.mjs";

// HELPERS //
const generateArrOfRandomNumbers = (min, max, numberOfElements = 7) => {
  const res = [];
  for (let count = 1; count <= numberOfElements; count++)
    res.push(Math.floor(Math.random() * (max - min) + min));

  return res;
};

const printNodeData = (node) => {
  if (node.data) console.log(node.data);
};

// MAIN //
const testArray = generateArrOfRandomNumbers(0, 100, 10);

const tree = createTree(testArray);
tree.buildTree(testArray);
tree.prettyPrint();

// checking balance
console.log(`Tree is balanced: ${tree.isBalanced()}`);

// printing
console.log(`
Printing nodes in level order (breadth-first):`);
tree.levelOrder(printNodeData);

console.log(`
Printing nodes in preorder (depth-first):`);
tree.preOrder(printNodeData);

console.log(`
Printing nodes in postorder (depth-first):`);
tree.postOrder(printNodeData);

console.log(`
Printing nodes in inorder (depth-first):`);
tree.inOrder(printNodeData);

// make unbalanced
console.log(`
Unbalancing tree...`);
const arrToUnbalanceTree = generateArrOfRandomNumbers(100, 1000, 5);
arrToUnbalanceTree.forEach((elem) => tree.insert(elem));
tree.prettyPrint();
console.log(`Tree is balanced: ${tree.isBalanced()}`); // false

// rebalance
console.log(`
Rebalancing tree...`);
tree.rebalance();
tree.prettyPrint();
console.log(`Tree is balanced: ${tree.isBalanced()}`); // false

// printing
console.log(`
Printing nodes in level order (breadth-first):`);
tree.levelOrder(printNodeData);

console.log(`
Printing nodes in preorder (depth-first):`);
tree.preOrder(printNodeData);

console.log(`
Printing nodes in postorder (depth-first):`);
tree.postOrder(printNodeData);

console.log(`
Printing nodes in inorder (depth-first):`);
tree.inOrder(printNodeData);