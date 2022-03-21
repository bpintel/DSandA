/*

Similar to linked lists, except every node has another pointer to the previous node

still no random access or indexes

uses more memory than linked list, but it is more flexible 

*/


class Node {
  constructor(val){
    this.next = null;
    this.prev = null;
    this.val = val;
  }
}

class DblLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }


  //push(val)
  //adds a node to the end of the list
  //create a new node
  //if this is the first node, head and tail are new node
  // otherwise => set the next prop on the tail to be the new node
  //set the prev prop on the new node to be the tail
  //set the tail to eb the new node
  //increment the length
  //return the list
  push(val){
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //pop()
  //removes the last node in the list
  //if there is no tail => return undefined
  //otherwise take current tail and store it in a var
  //if the length is 1, set the head and tail to be null
  //update the tail to be the prev node
  //set the newTail's next to be null
  //decrement the length
  //return the old tail (popped) node
  pop(){
    if (!this.tail) return undefined;
    let popped = this.tail;
    if (this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
    this.tail = popped.prev;
    this.tail.next = null;
    popped.prev = null;
  }
  this.length--;
  return popped; 
  }

  //shift()
  //removes the node from the beginning of a list
  //if the list is empty return undefined
  //store the current head in a var called old head
  //if the length is one => set head and tail to null
  //update the head to be the next of the old head
  //set the old head's next to null
  //decrement the length
  //return old head node
  shift(){
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1){
      this.head = null; 
      this.tail = null;
    } else {
    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    }
    this.length--;
    return oldHead;

  }



}
let list = new DblLinkedList();
list.push('first')
list.push('second')
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
