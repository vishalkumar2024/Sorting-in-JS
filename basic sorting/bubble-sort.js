//----------  Brute Force approach  ----------//
let arr = [52, 24, 53, 2, 11];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);

//---------- Optimise Code  ----------// 


function bubbleSort(arr){
   for (let i = 0; i < arr.length; i++) {
       bool = true;
       for (let j = 0; j < arr.length - 1 - i; j++) {
           if (arr[j] > arr[j + 1]) {
               let temp = arr[j];
               arr[j] = arr[j + 1];
               arr[j + 1] = temp;
               bool = false;
           }
       }
       if (bool == true) break;
     }
}
let arr = [52, 24, 53, 2, 11];
console.log(bubbleSort(arr));
