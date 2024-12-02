/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    console.log(l1);
    console.log(l2);
    const lengthL1 = l1.length;
    console.log(`lengthL1: ${lengthL1}`);
    const lengthL2 = l2.length;
    console.log(`lengthL2: ${lengthL2}`);
    const l1NumArr = []
    const l2NumArr = []
    for (let list1Iter = lengthL1 - 1; list1Iter > 0; list1Iter--) {
        console.log(`l1NumArr Before: ${l1NumArr}`);
        l1NumArr += l1[list1Iter];
        console.log(`l1NumArr After: ${l1NumArr}`);
    }
    for (let list2Iter = lengthL2 - 2; list2Iter > 0; list2Iter--) {
        console.log(`l2NumArr Before: ${l2NumArr}`);
        l2NumArr += l2[list2Iter];
        console.log(`l2NumArr After: ${l2NumArr}`);
    }
    //console.log(``);
    const listSum = l1NumArr + l2NumArr;
    console.log(`listSum: ${listSum}`);
    const lengthSum = listSum.length;
    console.log(`lengthSum: ${lengthSum}`);
    const finalArr = [];

    for (let sumIter = lengthSum - 1; sumIter > 0; sumIter--) {
        console.log(`finalArr Before: ${finalArr}`);
        finalArr[finalArr.length] = listSum[sumIter];
        console.log(`finalArr AFter: ${finalArr}`);
    }
    console.log(finalArr);
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    console.log("l1: ", l1);
    console.log("l2: ", l2);
    let list1Str = "";
    while (l1 !== null) {
        list1Str += l1.val;
        l1 = l1.next;
    }

    let list2Str = "";
    while (l2 !== null) {
        list2Str += l2.val;
        l2 = l2.next;
    }

    const intFinVal = parseInt(list1Str) + parseInt(list2Str);
    const strFinVal = intFinVal.toString();
    let listFinVal = null;
    console.log("strFinVal: ",strFinVal);
    console.log("listFinVal: ",listFinVal);

    listFinVal = appendSLL(strFinVal, listFinVal);
    return listFinVal;
};

class node {
    constructor() {
        this.data = null;
    }
}

// Function to add a new node to the Linked List    
function add(data) {
    let newnode = new node();
    newnode.data = data;
    newnode.next = null;
    return newnode;
}

// Function to convert the string
// to Linked List.
function appendSLL(strFinVal, listFinVal) {
    console.log("listFinVal: ",listFinVal);
    listFinVal = add(strFinVal[0]);
    console.log("strFinVal[0]: ",strFinVal[0]);
    let curr = listFinVal;
    console.log("curr: ",curr);


    // curr pointer points to the current node
    // where the insertion should take place
    for (let i = 1; i < strFinVal.length; i++) {
    console.log("curr: ",curr);
    console.log("i: ",i);
    console.log("strFinVal[i]: ",strFinVal[i]);


        curr.next = add(strFinVal[i]);
        curr = curr.next;
    }
    console.log("listFinVal: ",listFinVal);

    return listFinVal;
}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    let list1Str = "";
    while (l1 !== null) {
        list1Str += l1.val;
        l1 = l1.next;
    }

    let list2Str = "";
    while (l2 !== null) {
        list2Str += l2.val;
        l2 = l2.next;
    }

    const intFinVal = parseInt(list1Str) + parseInt(list2Str);
    const strFinVal = intFinVal.toString();
    let listFinVal = new ListNode();
    let current = listFinVal;

    for (let i = strFinVal.length - 1; i >= 0; i--) {
        current.next = new ListNode(parseInt(strFinVal[i]));
        current = current.next

        if (i === 0) {
            let temp = listFinVal.head;
            listFinVal.head = listFinVal.next;
            temp = null;
        }
    }
    return listFinVal.head;
};
