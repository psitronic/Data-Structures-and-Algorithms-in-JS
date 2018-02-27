/* Created on Mon Feb 26 07:27 2018
    
The implementation of the linear data staructures:
   Node
Methods:
   get_value()
   get_pointer()
   set_pointer()
    
@author: Andrey Sidorenko aka @psitronic
    */
class Node {
    // A class to implement a node
    constructor(element) {
        this.value = element;
        this.pointer = null;
    }

    get Value() {
        // Returns the value of the node
        return this.value;
    }

    get Pointer() {
        // Returns the reference to the next node
        return this.pointer;
    }

    set Pointer(pointer) {
        // Sets the reference to the next node
        this.pointer = pointer;
    }
}
/*
The implementation of the data staructures:
    LinkedList
Methods:
    add(element)
    append(element)
    delete(element)    
    index(element)
    insert(index, element)
    is_empty()
    pop()
    pop(index)
    search(element)
    size
*/
class LinkedList {
    // A class to implement the linked list
    constructor(){
        this.head = null;
    }

    add(element) {
        /*
        Adds a new element to the list
        Takes an element
        Returns nothing
        */
        var new_node = new Node(element);
        new_node.Pointer = this.head;
        this.head = new_node;
    }

    isEmpty() {
        /*
        Checks if the list empty
        Returns boolean
        */
        return this.head == null;
    }

    get size() {
        // Returns the number of elements in the list
        var head = this.head; // get the first node (head)
        var counter = 0;

        while (head != null) {
            counter++;
            head = head.Pointer; // move to the next node
        }
        return counter;
    }

    print() {
        // Returns a string representation of the list
        var current = this.head; // get the first node (head)
        var result = "";

        while (current != null) {
            result = result + current.Value + " -> ";
            current = current.Pointer; // move to the next node
        }
        result = JSON.stringify([result.slice(0,-4)]);
        return result.replace(/["]+/g, '');
    }
}
