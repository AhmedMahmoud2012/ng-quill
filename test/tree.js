// function TreeNode(value) {
//     this.value = value;
// }
// let tree1 = new TreeNode(5);
// tree1.left = new TreeNode(3);
// tree1.left.left = new TreeNode(1);
// tree1.right = new TreeNode(7);
// tree1.right.left = new TreeNode(6);
// let tree2 = new TreeNode(3);
// tree2.left = new TreeNode(1);
// tree2.right = new TreeNode(6);
// tree2.right.left = new TreeNode(5);
// tree2.right.right = new TreeNode(7);
// function inorderCheck(tree, list = []) {
//     if (!tree) return true;
//     if (!inorderCheck(tree.left, list)) {
//         return false;
//     }
//     if (list.length === 0 || list.shift() !== tree.value) {
//         return false;
//     }
//     return inorderCheck(tree.right, list)
// }
// function inorder(tree, list = []) {
//     if (!tree) return;
//     if (tree.left) {
//         inorder(tree.left, list);
//     }
//     list.push(tree.value);
//     if (tree.right) {
//         inorder(tree.right, list)
//     }
// }
// let list1 = [];
// inorder(tree1, list1);
// console.log(inorderCheck(tree2, list1));

let number = (71).toString(2);

let currLen = 0;
let prevLen = 0;
let maxLen = 0;
for (let i = 0; i < number.length; i++) {
    if (number[i] === '1') {
        currLen++;
    } else if (number[i] === '0') {
        prevLen = number[i + 1] == '0' ? 0 : currLen;
        currLen = 0;
    }
    if (prevLen + currLen > maxLen) {
        maxLen = prevLen + currLen;
    }
}

console.log(maxLen + 1);

