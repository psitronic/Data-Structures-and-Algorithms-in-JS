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

    delete(element) {
        /*
        Removes an element from the list.
        Takes an element to remove.
        Modifies the list.
        Returns nothing.
        */
       var current = this.head;
       var previous = null;

       while (current != null) {
           if (element == current.Value) {
               if (previous != null) {
                   previous.Pointer = current.Pointer;
                } else {
                    this.head = current.Pointer;
                }
                break;
            } else {
                previous = current;
                current = current.Pointer;
            }
       }
    }

    append(element) {
        /*
        Adds a new element to the end of the list making it the last element in the list
        Takes an element
        Returns nothing
        */
       var current = this.head;// get the first node (head)
       var previous = null;
       // searching for the last element in the list
       // the last element has a pointer to None
       if (this.isEmpty()) {
           this.add(element);
       } else {
           while (current != null) {
               previous = current;
               current = current.Pointer; // move to the next node
           }

           var new_node = new Node(element); // create a new node with data and pointer to None
           new_node.Pointer = null;
           previous.Pointer = new_node; // set the pointer of previous last to the new las node
       }
    }

    insert(index, element) {
        /*
        Adds a new element to the list at position index
        */

       if (index == 0) {
           this.add(element); // add the element to the front end
       } else if (index == this.size + 1) {
           this.append(element); // add the element to the rear end
       } else if (index > 0 && index < this.size + 1) {
           var current = this.head; // get the first node (head)
           var previous = null;
           var counter = 1;

           while (counter < index + 1) {
               counter++;
               previous = current; // remember the current node
               current = current.Pointer; // move to the next node
           }

           var new_node = new Node(element); // create a new node
           new_node.Pointer = current; // link the new node to the next
           previous.Pointer = new_node; // link the previous node to the new
 
       }
    }

    pop(index = null) {
        /*
        Removes and returns the element at the index postion in the list.
        Returns the removed element
        */
        var current = this.head; // get the first node (head)
        var previous = null;
        var counter = 0;
        //  if no index provided then pop the last element in the list
        if (index == null) {
            while (counter < this.size - 1) {
                counter++;
                previous = current; // remember the current node
                current = current.Pointer; // move to the next node
            }
            if (previous != null) {
                previous.Pointer = null;
            } else {
                this.head = current.Pointer;
            }
        // else pop the element at the position index
        } else {
            while (counter < this.size) {
                if (counter == index) {
                    if (previous != null) {
                        previous.Pointer = current.Pointer;
                     } else {
                         this.head = current.Pointer;
                     }
                     break;
                 } else {
                     counter++;
                     previous = current;
                     current = current.Pointer;
                 }
     
            }
        }
    return current.Value;
    }

    search(element) {
        /*
        Searches for the element in the linked list.
        Takes an element.
        Returns True if the element in the list, False otherwise
        */
        var node = this.head;

        while (node != null) {
            if (element == node.Value){
                return true;
            }
            node = node.Pointer;
        }
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

const ll = new LinkedList();
ll.append(0);
ll.add(1);
ll.add(2);
ll.add(30);
console.log(ll.size);
console.log(ll.print());
ll.insert(0,20);
console.log(ll.size);
console.log(ll.print());
ll.pop(1);
console.log(ll.size);
console.log(ll.print());
ll.delete(20);
console.log(ll.size);
console.log(ll.print());
ll.append(10);
console.log(ll.size);
console.log(ll.print());
console.log(ll.search(10))