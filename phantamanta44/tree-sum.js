function newNode() {
  return {
    left: null,
    right: null,
    value: Math.floor(Math.random() * 50),
  };
}
function newTree() {
  const node = newNode();
  let sum = node.value;
  if (Math.random() < 0.48) {
    const leftSubTree = newTree();
    node.left = leftSubTree.root;
    sum += leftSubTree.sum;
  }
  if (Math.random() < 0.48) {
    const rightSubTree = newTree();
    node.right = rightSubTree.root;
    sum += rightSubTree.sum;
  }
  return {
    root: node,
    sum: sum,
  };
}
for (let i = 0; i < 50; i++) {
  const tree = newTree();
  Test.assertEquals(tree.sum, sum(tree.root));
}