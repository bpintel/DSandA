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




}
let dblLinkedList = new DblLinkedList();
dblLinkedList.push('first')
dblLinkedList.push('second')
console.log(dblLinkedList)