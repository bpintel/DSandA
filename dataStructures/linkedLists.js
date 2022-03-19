/*
A linked list is an ordered list but without indexes
consists of nodes that point to the next element in the list
each node contains a value and a pointer (last node pointer is null)
contains properties:
head: first node in the list
tail: last node in the list
length: total number of nodes

RANDOM ACCESS IS NOT POSSIBLE

Arrays have expensive insertion and deletion
Arrays are good for quickly finding something by index
*/

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //PUSH(val) O(1)
  //accepts a value
  //create a new node with the value
  //if there is no head property in list, 
    //set the head and tail to be the new node
  //otherwise
    //set the next property on the tail to be the new node
    //and set the tail property on the list to be the new node
  //increment the length 
  //return the linked List
  push(val){
    let newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //POP() removes the last item from the list and returns it.
  //if no nodes in the list return undefined
  //loop through the list until you reach the tail
  //set the next prop of the 2nd to last node to be null
  //set the tail to be the 2nd to last node
  //decrement the length
  //create edge case for a list with length of 1
  //return the val of the removed node
  pop(){ //O(n)
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.tail--;
    if (this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //shift() O(1)
  //removes a node from the beginning of the list
  //if no nodes, return undefined
  //store current head prop in a var
  //set the head property to be the current head's next prop
  //decrement the length
  //return the val of the removed node
  shift(){
    if (!this.head) return undefined;
    let shifted = this.head;
    this.head = shifted.next;
    this.length--;
    if (this.length === 0){
      this.tail = null;
    }
    return shifted;
  }

  //unshift(val) O(n)
  //adds a node to the beginning of a list
  //if no nodes
    //set head and tail to be new node
  //otherwise
    // set the new node next property to be the current head
    //set the head prop to be the new node
    //increment the length
    //return the list
  unshift(val){
    let newNode = new Node(val)
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //get(idx) O(n)
  //returns a node based on index
  //if the index is not in range (less than zero or longer than the length)
    //return undefined
    //create a counter var
    //create a target var set to this.head
  //loop through the array while counter is not equal to idx
    //set target to target.next
    //increment counter
  //return the target node.
  get(idx){
    if (idx < 0 || idx >= this.length) return undefined;
    let counter = 0;
    let target = this.head;
    while (counter !== idx){
      target = target.next;
      counter++
    }
    return target;
  }

  //set(idx, val) 
  //updates the value of a node at a specific index
  //use get() to find the specific nod
  //if the node is found, update the val and return true
  //if not found return false

  set(idx, val){
    let node = this.get(idx)
    if (node){
      node.val = val;
      return true;
    }
    return false;
  }

  //insert(idx, val)
  //inserts a new node at a specific index
  //if the index is out of range, return false
  //if the index is equal to length
    //push() a new node to end of list
  //if the index is 0
    //unshift() a new node to the beginning of the list
  //otherwise
    //use get() to access the node at the index - 1
    //set the next property on that node to be the new node
    //set the next property on the new node to be the previous next
    //increment the length
    //return true
  insert(idx, val){


  }


  // remove(idx){

  // }

  // reverse(){

  // }
}

let list = new LinkedList()
list.push('hello')
list.push('world')
// console.log(list)
// console.log(list.head.next)
// console.log(list.tail)
// console.log(list.tail === list.head.next)
// console.log(list.pop())
// console.log(list.shift(), list)
console.log(list.get(0))
console.log(list.get(1))
list.push('!')
console.log(list.get(2))
console.log(list.set(1, 'update'))
console.log(list.get(1))