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

linked lists are excellent alternative to arrays when insertion and deletion at the beginning are frequently used
Arrays contain a built in index where linked lists do not


TC:
  insertion:   O(1)
  removal:     O(1) => worst case is O(n)
  searching:   O(n)
  access:      O(n)

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

  //insert(idx, val)    O(1)
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
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(idx - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  //remove(idx) O(1) or O(n)
  //removes a node from a list
  //if the idx is out of range => return undefined
  //if the idx is the same as length-1 pop()
  //if the idx is zero, shift()
  //otherwise use get to access the node at idx-1
  //set the next prop on that node to be the next prop of the next node
  //decrement the length
  //return the value of the removed node
  remove(idx){
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    let prev = this.get(idx - 1);
    let removed = prev.next;
    prev.next = removed.next;
    
    this.length--;
    return removed.val;

  }

  //reverse()
  //reverse the linked list in place (traverse & reverse)

  //swap the head and the tail
  //create a var called next
  //create a var called prev
  //create a var called node and initialize it to the head prop
  //loop through the list
  //set next to be the next prop on whatever node is
  //set the next prop on the node to be whatever prev is
  //set prev to be the value of the node var
  //set the node var to be the val of the next var
  reverse(){
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for(let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  //prints an array of all values in order
  print() {
    var arr= [];
    var current = this.head;
    while(current) {
      arr.push(current.val);
      current = current.next
    }
    return arr;
  }

}

let list = new LinkedList()
list.push('first')
list.push('second')
list.push('third')
list.push('fourth')
list.push('fifth')



console.log(list.print())
list.reverse();
console.log(list.print())
console.log(list.head)
console.log(list.tail)
