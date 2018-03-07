/*
Created on Wed Mar  7 14:25:08 2018

The implementation of the linear data staructures:
    Queue 'First In First Out'
Methods:
    add(element)
    get()
    size()
    isEmpty()

@author: Andrey Sidorenko @psitronic
*/

class Queue{
    /*
    A class to implement the FIFO queue sturcture
    */
   constructor() {
       this.queue = [];
   }

   add(element) {
       /*
       Adds an element to the rear end of the queue
       */
       this.queue.unshift(element);
   }

   get() {
       /*
        Gets the front element in the queue
        If the queue is not empty removes and returns
        the front element, None otherwise
        */
       return this.queue.pop();
   }

   isEmpty() {
       /*
       Checks if the queue is empty
       */
       return this.size() == 0;
   }

   size() {
       /*
       Returns the queue length
       */
       return this.queue.length;
   }
}

const q = new Queue();
q.add(1);
q.add(2);
console.log(q.size());
console.log(q.isEmpty());
console.log(q.get());
console.log(q.get());
console.log(q.size());
console.log(q.isEmpty());
