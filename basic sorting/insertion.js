let arr = [5, 4, 3, 2, 1];

function insertionSort(arr){
   for (let i = 1; i <= arr.length; i++) {
       let j = i;
       while (j > 0 && arr[j] < arr[j - 1]) {
          let temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
          j--;
       }
   }
}
console.log(arr);
