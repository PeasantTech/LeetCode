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

    let invertStringList1 = "";
    console.log("list1Str.length: ", list1Str.length);
    for (let l1Loop = list1Str.length - 1; l1Loop >= 0; l1Loop--) {
        invertStringList1 += list1Str[l1Loop];
        console.log("invertStringList1: ", invertStringList1);
    }

    let list2Str = "";
    while (l2 !== null) {
        list2Str += l2.val;
        l2 = l2.next;
    }

    let invertStringList2 = "";
    console.log("list2Str.length: ", list2Str.length);
    for (let l2Loop = list2Str.length - 1; l2Loop >= 0; l2Loop--) {
        invertStringList2 += list2Str[l2Loop];
        console.log("invertStringList2: ", invertStringList2);
    }

    const finVal = (parseInt(invertStringList1) + parseInt(invertStringList2)).toString();
    console.log("finVal: ", finVal);

    let listFinVal = new ListNode();
    let current = listFinVal;

    console.log("finVal.length: ", finVal.length);
    for (let i = finVal.length - 1; i >= 0; i--) {
        console.log("current: ", current);
        console.log("listFinVal: ", listFinVal);
        current.next = new ListNode(parseInt(finVal[i]));
        current = current.next

        if (i === 0) {
            let temp = listFinVal.head;
            listFinVal.head = listFinVal.next;
            temp = null;
        }
    }
    return listFinVal.head;
};
