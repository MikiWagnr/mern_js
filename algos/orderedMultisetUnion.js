/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.

    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

/* 
    Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
    because it occurs 3 times at most in ONE set
*/
const nums1A = [1, 2, 2, 2, 7];
const nums1B = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const nums2B = [2, 6, 6, 7];
const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

const nums3A = [];
const nums3B = [2, 2, 3, 3, 3];
const expected3 = [2, 2, 3, 3, 3];

const nums4A = [2, 2, 3, 3, 3];
const nums4B = [];
const expected4 = [2, 2, 3, 3, 3];

const nums5A = [];
const nums5B = [];
const expected5 = [];

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {
    let newArr = []
    let i = 0
    let j = 0
    while (i < sortedA.length && j < sortedB.length){
        if(sortedA[i] < sortedB[j]){
            newArr.push(sortedA[i])
            i++
        }else{
            newArr.push(sortedB[j])
            j++
        }
    }
    while (i < sortedA.length){
        newArr.push(sortedA[i])
        i++
    }
    while (j < sortedB.length){
        newArr.push(sortedB[j])
        j++
    }
    return newArr
}

// function orderedMultisetUnion(sortedA, sortedB) {

//     let i = 0
//     let j = 0
//     let newArr = []

//     while (i < sortedA.length || j < sortedB.length) {
//         if (sortedA[i] === sortedB[j]) {
//             newArr.push(sortedA[i]);
//             i++;
//             j++;
//             // console.log(newArr)
//         } else if (sortedA[i] < sortedB[j] || j === sortedB.length) {
//             newArr.push(sortedA[i]);
//             i++;

//         } else {
//             newArr.push(sortedB[j]);
//             j++;
//         }
//     }
//     return newArr;

// }

console.log('1)', orderedMultisetUnion(nums1A,nums1B))
console.log('2)',orderedMultisetUnion(nums2A,nums2B))
console.log('3)',orderedMultisetUnion(nums3A,nums3B))
console.log('4)',orderedMultisetUnion(nums4A,nums4B))
console.log('5)',orderedMultisetUnion(nums5A,nums5B))

/*****************************************************************************/