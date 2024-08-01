


var addTwoNumbers = function(l1, l2) {
  let head = new ListNode(0)
  let currentNode = head
  let carryDigit = 0
  let sum = 0

  while (l1 || l2 || carryDigit){
      sum = carryDigit;

      if(l1){
          sum += l1.val;
          l1 = l1.next;
      }
      if (l2) {
          sum += l2.val
          l2 = l2.next
      }
      
      let num = sum % 10
      carryDigit = Math.floor(sum / 10);
      head.next = new ListNode(num);
      head = head.next;
  }
  return currentNode.next
};