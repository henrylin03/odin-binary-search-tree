import createTree from "./createTree.mjs";

const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = createTree(testArray);

tree.buildTree();
tree.prettyPrint();

// inserting
console.log(`
Inserting...
`);
tree.insert(8); // expected: error
tree.insert(69);
tree.insert(420);
tree.insert(-6969);

tree.prettyPrint();
