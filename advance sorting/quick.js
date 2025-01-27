//This function swaps two elements in an array
function swap(arr, a, b) {
    //Create a temporary variable to store the value of the element at index a
    let temp = arr[a];
    //Set the element at index a to the value of the element at index b
    arr[a] = arr[b];
    //Set the element at index b to the value of the temporary variable
    arr[b] = temp;
}
//This function partitions an array into two parts, one with elements less than the pivot and one with elements greater than the pivot
function partition(arr, start, end) {
    //Set the index to start one less than the start index arr[0-1]
    let idx = start - 1;
    //Set the pivot element to the last element in the array arr[arr.length-1]
    let pivot = arr[end];

    //Loop through the array from the start and end index
    for (let j = start; j < end; j++) {
        //If the current element is less than or equal to the pivot element
        if (arr[j] <= pivot) {
            //Increment the index
            idx++;
            //Swap the current element with the element at the index
            swap(arr, j, idx);
        }
    }
    //Increment the index
    idx++;

    //Swap the pivot element with the element at the index
    swap(arr, end, idx);
    return idx;
}

//It takes an array, a start index, and an end index as parameters
function quickSort(arr, start, end) {
    //If the start index is greater than or equal to the end index, the array is already sorted
    if (start >= end) return;  //Base case
    else {
        //Otherwise, partition the array around a pivot element
        let pivotIdx = partition(arr, start, end);

        //Recursively call quickSort on the left and right subarrays
        quickSort(arr, start, pivotIdx - 1)
        quickSort(arr, pivotIdx + 1, end)
    }
}

let arr = [5, 4, 3, 2, 1];
quickSort(arr, 0, arr.length - 1)
console.log(arr)