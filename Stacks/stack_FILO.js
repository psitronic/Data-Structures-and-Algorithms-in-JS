/* Created on Sun Mar 04 15:37 2018
    
The implementation of the linear data staructures:
    Stack 'First In Last Out'
Methods:
    push(element)
    pop()
    peek()
    size()
    isEmpty()
    
@author: Andrey Sidorenko aka @psitronic
*/

class Stack {
    /*
        A class to implement the FILO stack sturcture
    */
   constructor(){
       this.stack = [];
   }

   push(element) {
       /*
       Add an element to the bottom of the stack
       */
      this.stack.unshift(element);
   }
   pop() {
       /*
        Pops the bottom element in the stack
        Removes and returns the bottom element
       */
      return this.stack.shift();
   }
   peek() {
       /*
        Peeks the bottom element in the stack
        Returns the bottom element
       */
      return this.stack[0];
   }
   isEmpty() {
       /*
       Check if the satck is empty
       */
      return this.size() == 0;

   }
   size() {
       /*
       Returns the stack length
       */
      return this.stack.length;
   }
   print() {
    // Returns a string representation of the stack
    
    return JSON.stringify(this.stack);
}
}

const st = new Stack();
st.push(1);
st.push(2);
st.push(3);
console.log(st.print());
console.log(st.isEmpty());
console.log(st.size());
console.log(st.peek());
console.log(st.pop());
console.log(st.pop());
console.log(st.pop());
console.log(st.peek());
console.log(st.isEmpty());
console.log(st.size());
console.log(st.print());