/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const arrLengths = nums1.length + nums2.length;
    const combArr = [];
    let increment = 0;
    for (i = 0; i < arrLengths; i++) {
        if (i < nums1.length) {
            combArr[i] = nums1[i];
        } else {
            combArr[i] = nums2[increment];
            increment++;
        }
    }
    const sortArr = combArr.sort((a, b) => a - b);
    const left = 0;
    for (let arrIt = 0; arrIt < arrLengths; arrIt++) {
        if (sortArr.length % 2) {
            if (sortArr.length === 1) {
                return sortArr[0];
            }
        } else {
            if (sortArr.length === 2) {
                return (sortArr[0] + sortArr[1]) / 2;
            }
        }
        const right = sortArr.length - 1;

        sortArr.splice(right, 1);
        sortArr.splice(left, 1);

    }
};
