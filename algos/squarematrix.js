// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
    Given a square matrix (2d array) of integers Calculate the absolute difference between the sums of its diagonals
    The absolute difference between two variables, is simply one subtracted from the other and you get the sum.
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
    let sum1 = 0
    let sum2 = 0 
    
    for (let i = 0; i < sqrMatrix.length; i++){
        for(let j = 0; j < sqrMatrix.length; j++){
            if (i===j){
                sum1 += sqrMatrix[i][j]
            }
            if(i + j === sqrMatrix.length - 1){
                sum2 += sqrMatrix[i][j]
                
            }
        }
    }
    return Math.abs(sum1 - sum2)
}

// function diagonalDifference(sqrMatrix) {

//     let leftToRightDiagonal = 0;
//     let rightToLeftDiagonal = 0;
//     const size = sqrMatrix.length;

//     for (let i = 0; i < size; i++) {
//         leftToRightDiagonal += sqrMatrix[i][i];
//         rightToLeftDiagonal += sqrMatrix[i][size - i - 1];
//     }

//     const difference = leftToRightDiagonal - rightToLeftDiagonal;

//     return difference < 0 ? -difference : difference;
// }

function diagonalDifference(sqrMatrix){
    if (sqrMatrix.length != sqrMatrix[0].length) return 0

    let right = 0
    let left = 0

    for (let n = 0; n < sqrMatrix.length; n ++){
        right =+ sqrMatrix[n][n]
        left += sqrMatrix[n][sqrMatrix.length - 1 - n]
    }
    return Math.abs(left - right) 
}

console.log(diagonalDifference(squareMatrix1))
console.log(diagonalDifference(squareMatrix2))
