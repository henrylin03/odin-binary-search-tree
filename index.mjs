// driver script

import createTree from "./createTree.mjs";

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

const testArray = generateArrOfRandomNumbers(10)

const tree = createTree(testArray);
tree.buildTree(testArray);
tree.prettyPrint();
// console.log(tree.isBalanced()); // expected true

// // create an unbalanced tree by removing two levels on the right-most subtree
// tree.deleteItem(6345);
// tree.deleteItem(67);
// tree.deleteItem(324);

// tree.prettyPrint();
// console.log(tree.isBalanced()); // expected false

// // rebalancing
// tree.rebalance();
// tree.prettyPrint();
// console.log(tree.isBalanced()); // expected true
