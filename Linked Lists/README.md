# Data Structures and Algorithms
Implementations of  Data Structures and Algorithms in JavaScript

<ul>
<li>
<h3>Nodes</h3>
<p>
A basic building block for the linked list implementation. Each node contains the list <i>element</i> and <i>pointer</i> - a reference to the next node. It is implemented as a class with the setters and getters to access and modify the element and the pointer:
<ul>
<li><b>Value()</b> is a getter which return the element value.</li> 
<li><b>Pointer()</b> is a getter which return the pointer to the next node (next element) in the list.</li>
<li><b>Pointer(pointer)</b> is a setter which sets the pointer for the current node to the next node.</li>
</ul>
</p>
</li>
<li>
<h3>Singly Linked Lists (unordered)</h3>
<p>A singly linked list is a collection of nodes where each node points to the next node. The implemented list operations:
<ul>
<li><b>LinkedList()</b> creates a new empty list.</li>
<li><b>add(element)</b> adds a new element to the list.</li>
<li><b>isEmpty</b> checks whether the list is empty.</li>
<li><b>size()</b> returns the number of elements in the list</li>
</ul>
</li>
</ul>