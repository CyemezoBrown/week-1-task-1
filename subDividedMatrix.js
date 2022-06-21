/**
 * example: subdivide matrix from:
 * 1  5  7
 * 7  3  5
 * 2  6  9
 * 
 * to: 
 * 1  5
 * 7  3
 * 
 * 5  7
 * 3  5
 * 
 * 7  3
 * 2  6
 * 
 * 3  5
 * 6  9
 * 
 */


// returns an array of all possible 2 X 2 combinations
const subdivideMatrix = (twoDimensionalMatrix) => {
    let matrixHeight = twoDimensionalMatrix.length - 1;
    let matrixWidth = twoDimensionalMatrix[0].length - 1;
    let subMatrices = [];

    for(let row = 0; row < matrixWidth; row++) {
        for (let col = 0; col < matrixHeight; col++) {
            let firstRow = [twoDimensionalMatrix[row][col], twoDimensionalMatrix[row][col + 1]]
            let secondRow = [twoDimensionalMatrix[row + 1][col], twoDimensionalMatrix[row + 1][col + 1]]
            subMatrices.push([firstRow, secondRow]);
        }
    }

    return subMatrices;
};

// finds largest value in each submatrix. Returns an array of arrays with one element 
const findLargestSubmatrixValue  = (threeDArray) => {
    let output = [];
    
    for(let twoDArrayIndex = 0; twoDArrayIndex < threeDArray.length; twoDArrayIndex++) {
        let largestValueInTwoDArray = [0];
        threeDArray[twoDArrayIndex].forEach(array => {
            let largestValueInArray = array.sort()[array.length - 1];
            if(largestValueInArray > largestValueInTwoDArray) {
                largestValueInTwoDArray[0] = largestValueInArray;
            }
        });
        output.push(largestValueInTwoDArray);
    }
    return output;
};

// finds smallest value in each submatrix. Returns an array of arrays with one element 
const findSmallestSubmatrixValue  = (threeDArray) => {
    let output = [];
    
    for(let twoDArrayIndex = 0; twoDArrayIndex < threeDArray.length; twoDArrayIndex++) {
        let smallestValueInTwoDArray = [];
        threeDArray[twoDArrayIndex].forEach(array => {
            let smallestValueInArray = array.sort()[0];
            if(smallestValueInTwoDArray[0] === undefined) {
                smallestValueInTwoDArray[0] = smallestValueInArray;
            }
            if(smallestValueInArray < smallestValueInTwoDArray[0]) {
                smallestValueInTwoDArray[0] = smallestValueInArray;
            }
        });
        output.push(smallestValueInTwoDArray);
    }

    

    return output;
};


let matrix = [[1, 5, 7], [7, 3, 5], [2, 6, 9]];
let threeDMatrix = subdivideMatrix(matrix);

console.log(findLargestSubmatrixValue(threeDMatrix));
console.log(findSmallestSubmatrixValue(threeDMatrix));