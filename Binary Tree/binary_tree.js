/*
Created on Sun Mar 05 11:12 2018
    
A simple implementation of the tree data structure using a list of lists.

Functions:
    binaryTree(root)
    insertLeft(root, newBranch)
    insertRight(root, newBranch)
    getRootValue(root)
    setRootValue(root, newValue)
    getLeftChild(root)
    getRightChild(root)

@author: Andrey Sidorenko aka @psitronic
*/
function binaryTree(root) {
    /*
     Constructs a list with a root node and two empty children sublists
    */
    return [root, [], []];
}

function insertLeft(root, newBranch) {
    /*
    Adds a left subtree to the root of a tree
    */
   var index = 1; // the left branch in the list
   return insert(root, index, newBranch);
}

function insertRight(root, newBranch) {
    /*
    Adds a right subtree to the root of a tree
    */
    var index = 2; // the right branch in the list
    return insert(root, index, newBranch);
}

function insert(root, index, newBranch) {
    /*
    Adds a subtree to the root of a tree
    index = 1 for the left branch
    index = 2 for the right branch
    */
    var tmp = root.splice(index,1);
    if (tmp.length > 1) {
        root.splice(index, 1,[newBranch, tmp, []]);
    } else {
        root.splice(index, 1, [newBranch, [], []]);
    }
    return root;
}

function getRootValue(root) {
    /*
    Returns the root value
    */
    return root[0];
}

function setRootValue(root, newValue) {
    /*
    Sets the root value
    */
    root[0] = newValue;
}

function getLeftChild(root) {
    /*
    Returns a left child of the root
    */
    return root[1];
}

function getRightChild(root) {
    /*
    Returns a right child of the root
    */
    return root[2];
}

var r = binaryTree('a');
insertLeft(r,'b');
insertRight(r,'c');
insertRight(getRightChild(r),'d');
insertLeft(getRightChild(getRightChild(r)),'e');
insertLeft(getLeftChild(r),'f');
insertLeft(getLeftChild(getLeftChild(r)),'g');
console.log(r);