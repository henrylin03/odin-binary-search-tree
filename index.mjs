import createTree from "./createTree.mjs";

const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = createTree(testArray);

tree.buildTree();

// inserting
tree.insert(69);
tree.insert(420);
tree.insert(-6969);

tree.prettyPrint();

// deleting
console.log(`
Deleting...
`);
tree.deleteItem(69);
tree.prettyPrint();
tree.deleteItem(324);
tree.prettyPrint();
tree.deleteItem(-6969);
tree.prettyPrint();
tree.deleteItem(4);
tree.prettyPrint();
tree.deleteItem(8);
tree.prettyPrint();
