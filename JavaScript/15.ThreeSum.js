/* /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const holdArr = [];
    const sortedNums = nums.sort();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const numsArrLoop = [sortedNums[i], sortedNums[j], sortedNums[k]];
                const numsArrMath = sortedNums[i] + sortedNums[j] + sortedNums[k];
                console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
                console.log("numsArrLoop: " + numsArrLoop);
                console.log("holdArr.length: " + holdArr.length);
                console.log("numsArrMath: " + numsArrMath);
                /*
                numsArrMath === 0 ? console.log(`numsArrMath === 0 : ${numsArrMath} : true`) : console.log(`numsArrMath === 0 : ${numsArrMath} : false`);
                holdArr.length === 0 ? console.log(`holdArr.length === 0 : ${holdArr.length} : true`) : console.log(`holdArr.length === 0 : ${holdArr.length} : false`);
                holdArr.includes(numsArrLoop) ? console.log(`holdArr.includes(numsArrLoop) : true`) : console.log(`holdArr.includes(numsArrLoop): false`);
                */
                if (numsArrMath === 0) {
                    console.log(`numsArrMath === 0 : ${numsArrMath} : true`);
                    if (holdArr.includes(numsArrLoop)) {
                        console.log(`holdArr.includes(numsArrLoop) : true`);
                    } else {
                        console.log(`holdArr.includes(numsArrLoop) : false`);
                    }
                } else {
                    console.log(`numsArrMath === 0 : ${numsArrMath} : false`);
                }

                console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
                numsArrMath === 0 ? () => {
                    holdArr.includes(numsArrLoop) ? null : holdArr[holdArr.length] = numsArrLoop;
                } : null;
            };
        };
    };
    console.log(holdArr);
    return holdArr;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const holdArr = [];
    const sortedNums = nums.sort();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const numsArrLoop = [sortedNums[i], sortedNums[j], sortedNums[k]];
                const numsArrMath = sortedNums[i] + sortedNums[j] + sortedNums[k];
                if (numsArrMath === 0) {
                    if (holdArr.toString().includes(numsArrLoop.toString())) {
                            null;
                    } else {
                        holdArr[holdArr.length] = numsArrLoop;
                    }
                } else {
                    null;
                }
            };
        };
    };
    return holdArr;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const holdArr = [];
    const sortedNums = nums.sort();
    console.log(sortedNums);
    for (let i = 0; i < Math.floor(nums.length / 3); i++) {
        for (let j = i + 1; j < Math.floor(nums.length * (2 / 3)); j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const numsArrLooping = [sortedNums[i], sortedNums[j], sortedNums[k]];
                const numsArrMathed = sortedNums[i] + sortedNums[j] + sortedNums[k];
                if (numsArrMathed === 0) {
                    if (holdArr.toString().includes(numsArrLooping.toString())) {
                        null;
                    } else {
                        holdArr[holdArr.length] = numsArrLooping;
                        console.log(numsArrLooping);
                    }
                }
            }
        }
    };
return holdArr;
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


