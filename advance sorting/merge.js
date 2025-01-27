
// This function merges two sorted subarrays into a single sorted array

function merge(arr, start, midTerm, end) {
    // Create a new array brr[] to store the merged elements
    let brr = [];

    // Initialize two pointers to the start of each subarray
    let i = start;
    let j = midTerm + 1;

    // Loop through both subarrays and compare their elements
    while (i <= midTerm && j <= end) {
        // If the element in the first subarray is smaller, add it to the brr[]
        if (arr[i] < arr[j]) {
            brr.push(arr[i])
            i++;
        }
        // Otherwise, add the element in the second subarray to the new array brr[]
        else {
            brr.push(arr[j])
            j++;
        }
    }
    // Add any remaining elements from the first subarray to the new array
    while (i <= midTerm) {
        brr.push(arr[i]);
        i++
    }
    // Add any remaining elements from the second subarray to the new array
    while (j <= end) {
        brr.push(arr[j])
        j++
    }
    // Copy merged elements back to the original array
    for (let idx = 0; idx <= brr.length - 1; idx++) {
        arr[idx + start] = brr[idx]
    }

}

// Function to perform Merge Sort on an array
function MergeSort(arr, start, end) {
    let midTerm = Math.floor((start + end) / 2);
    if (start >= end) return; //Base case, which basically says- only one element in arr
    else {
        MergeSort(arr, start, midTerm);   // First half which is Recursively divided
        MergeSort(arr, midTerm + 1, end); //Second half  which is Recursively divided

        merge(arr, start, midTerm, end); //Function to merge two halves of array
    }
}

let arr = [5, 4, 53, 2, 1];

MergeSort(arr, 0, arr.length - 1) //Calling the function to sort
console.log(arr);