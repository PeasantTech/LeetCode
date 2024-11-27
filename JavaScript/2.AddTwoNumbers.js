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
