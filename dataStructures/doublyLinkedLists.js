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

  
  //unshift(val)
  // create a new node with the val
  // if the length is zero
  // set head and tail to new node
  //otherwise
  //set the pre prop  on the head to be the head of the new node
  //set the next prop on the new node to be head prop
  //update the head to be the new node
  //increment the length
  //return the list

  unshift(val){
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }


  //get(idx) 
  //takes a index and returns the node at the index
  //if the idx is out of range => return null
  // if the idx is less than or equal to 1/2 the length of the list
    //loop through the list starting from the head and loop towards the middle
    //return the node once it is found
  //if the idx is greater than 1/2 the length of the list
    //loop through the list starting from the tail and loop towards the middle
    //return the node once it id found

  get(idx){
    if (idx < 0 || idx >= this.length) return null;
    let count, current;
    if (idx <= this.length/2) {
      count = 0;
      current = this.head;
      while (count !== idx){
        current = current.next;
        count++;
      }
    } else {
      count = this.length-1;
      current = this.tail;
      while (count !== idx){
        current = current.prev;
        count--;
      }
    }
    return current;
  }

}

let list = new DblLinkedList();
list.push('first')
list.push('second')
list.push('third')
list.push('fourth')
list.push('fifth')



console.log(list.get(1))
console.log(list.get(3))