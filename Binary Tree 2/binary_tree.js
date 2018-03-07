/*
Created on Wed Mar  7 13:02:26 2018    
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

class BinaryTree {
    /*
    A class to implement a binary tree and corresponding methods
    */
   constructor(root) {
       this.key = root;
       this.leftChild = null;
       this.rightChild = null;
   }

   insertLeft(newNode) {
       /*
       Adds a left child (subtree) to the root of a tree
       */
       if (this.leftChild == null) {
           this.leftChild = new BinaryTree(newNode);
       } else {
           tmp = new BinaryTree(newNode);
           tmp.leftChild = this.leftChild;
           this.leftChild = tmp;
       }
   }

   insertRight(newNode) {
       /*
       Adds a right child (subtree) to the root of a tree
       */
       if (this.rightChild == null) {
           this.rightChild = new BinaryTree(newNode);
       } else {
           tmp = new BinaryTree(newNode);
           tmp.leftChild = this.leftChild;
           this.leftChild = tmp;
       }
   }

   getRightChild() {
       /*
       Returns a right subtree to the root of a tree
       */
       return this.rightChild;
   }

   getLeftChild() {
       /*
       Returns a left subtree to the root of a tree
       */
       return this.leftChild;
   }

   setRootValue(obj) {
       /*
       Sets the root value
       */
       this.key = obj;
   }

   getRootValue() {
       /*
       Returns the root value
       */
       return this.key;
   }
}

var bt = new BinaryTree("a");
console.log(bt.getRootValue());
console.log(bt.getLeftChild());
bt.insertLeft("b")
console.log(bt.getLeftChild());
console.log(bt.getLeftChild().getRootValue());
bt.insertRight("c");
console.log(bt.getRightChild());
console.log(bt.getRightChild().getRootValue());
bt.getRightChild().setRootValue("Here");
console.log(bt.getRightChild().getRootValue());
