# Data Structures and Algorithms
Implementations of  Data Structures and Algorithms in JavaScript

<ul>
<li>
<h3><a href="https://github.com/psitronic/Data-Structures-and-Algorithms-in-JS/tree/master/Linked%20Lists">Nodes</a></h3>
<p>
A basic building block for the linked list implementation. Each node contains the list <i>element</i> and <i>pointer</i> - a reference to the next node. It is implemented as a class with the setters and getters to access and modify the element and the pointer:
<ul>
<li><b>Value()</b> is a getter which returns the element value.</li> 
<li><b>Pointer()</b> is a getter which returns the pointer to the next node (next element) in the list.</li>
<li><b>Pointer(pointer)</b> is a setter which sets the pointer for the current node to the next node.</li>
</ul>
</p>
</li>

<li>
<h3><a href="https://github.com/psitronic/Data-Structures-and-Algorithms-in-JS/tree/master/Stacks">Stack FILO</a></h3>
<p>
A basic "First In Last Out" stack. It is implemented as a class with the setters and getters to access elements in the stack:
<ul>
<li><b>Stack()</b> creates a new empty stack.</li>
<li><b>isEmpty()</b> checks if the satck is empty.</li>
<li><b>peek()</b> peeks the bottom element in the stack.</li>
<li><b>pop()</b> removes and returns the bottom element.</li>
<li><b>push(element)</b> adds an element to the bottom of the stack.</li> 
<li><b>size()</b> returns the stack length.</li>
</ul>
</p>
</li>

<li>
<h3><a href="https://github.com/psitronic/Data-Structures-and-Algorithms-in-JS/tree/master/Linked%20Lists">Singly Linked Lists (unordered)</a></h3>
<p>A singly linked list is a collection of nodes where each node points to the next node. The implemented list operations:
<ul>
<li><b>LinkedList()</b> creates a new empty list.</li>
<li><b>add(element)</b> adds a new element to the list.</li>
<li><b>append(element)</b> adds a new element to the end of the list making it the last element in the list.</li>
<li><b>delete(element)</b> removes an element from the list.</li>
<li><b>index(element)</b> returns a position of the element in the list.</li>
<li><b>insert(index, element)</b> adds a new element to the list at position index.</li>
<li><b>isEmpty</b> checks whether the list is empty.</li>
<li><b>pop()</b> removes and returns the rear (last) element in the list.</li>
<li><b>pop(index)</b> removes and returns the element at the index postion in the list.</li>
<li><b>print()</b> returns a string representation of the list.</li>
<li><b>search(element)</b> searches for the element in the linked list.</li>
<li><b>size()</b> returns the number of elements in the list.</li>
</ul>
</li>

<li>
<h3><a href="https://github.com/psitronic/Data-Structures-and-Algorithms-in-JS/tree/master/Binary%20Tree">Binary Tree (List of Lists Representation)</a></h3>
<p>
A binary tree is a tree in which each node has two children. It is implemented as a list of lists using functions:
<ul>
<li><b>binaryTree(root)</b> creates a new empty binary tree.</li>
<li><b>insertLeft(root, newBranch)</b> inserts a new binary tree as the left child of the
current node.</li>
<li><b>insertRight(root, newBranch)</b> inserts a new binary tree as the left child of the
current node.</li>
<li><b>getRootValue(root)</b> returns the value of the current node.</li>
<li><b>setRootValue(root, newValue)</b> sets the value of the current node.</li> 
<li><b>getLeftChild(root)</b> returns the binary tree corresponding to the left child of the current
node.</li>
<li><b>getRightChild(root)</b> returns the binary tree corresponding to the right child of the current
node.</li>
</ul>
</p>
</li>

</ul>