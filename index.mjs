// driver script

import createTree from "./createTree.mjs";

// HELPERS //
const generateArrOfRandomNumbers = (numberOfElements = 7) => {
  const MIN_NUMBER = 0;
  const MAX_NUMBER = 100;

  const res = [];
  for (let count = 1; count <= numberOfElements; count++)
    res.push(
      Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER)
    );

  return res;
};

const printNodeData = (node) => {
  if (node.data) console.log(node.data);
};

// MAIN //
const testArray = generateArrOfRandomNumbers(10);

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
