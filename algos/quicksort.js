/* 
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/

    Create a function that uses yesterday’s partition to fully sort an array
    in-place.

    Unstable sort.
    
    Time Complexity
        - Best: O(n log(n)) linearithmic.
        - Average: O(n log(n)) linearithmic.
        - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.

    Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the
        last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
        
        Steps:
        This is a Divide and Conquer algorithm.
        You pick an element as pivot then partition the array around the pivot you picked.
        There are many different ways to pick the pivot.
        Just pick first element as pivot.
        it first divides a large array into two smaller subarrays and then recursively sort the subarrays.
        
        Basically, three steps are involved in the whole process:

        Pivot selection: Pick an element, called a pivot, from the array leftmost or rightmost.
        Partitioning: Reorder the array such that all elements with values less than the pivot come before the pivot. In contrast, all elements with values greater than the pivot come after it. The equal values can go either way. After this partitioning, the pivot is in its final position.
        Recur: Recursively apply the above steps to the subarray of elements with smaller values than the pivot and separately to the subarray of elements with greater values than the pivot.
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

const nums3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const expected3 = [2, 3, 3, 3, 6, 7, 8, 11, 14];

const nums4 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected4 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

/*****************************************************************************/

/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
*/

const swap = (nums, i, j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
const partition = (nums, high, low) => {
    // choose pivot
    let pivot = nums[high]
    // set low to one less 
    // * dw this will readjust when conditional is hit
    let i = (low - 1)

    for (let j = low; j < high; j++) {
        if (nums[j] <= pivot){
            i++; //* incremented here
            swap(nums, i, j)
        }
    }

    swap(nums, i + 1, high)
    return i + 1;
}
const quicksort = (nums, high, low) => {
    // choose a pivot
    if (low < high) {
        // set pivot
        let pivot = partition(nums, high, low)

        // recursively call quick sort for two sides of partition

        // sort lesser half
        quicksort(nums, pivot - 1, low)
        // sort greater half
        quicksort(nums, high, pivot + 1)
    }
    return nums
}
quicksort(nums2, nums2.length - 1, 0)
console.log(nums2);
    // module.exports = { quickSort };