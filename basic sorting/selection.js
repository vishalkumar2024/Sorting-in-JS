let arr = [3, 9, 52, 1, 5, 11];

for (let i = 0; i < arr.length - 1; i++) {
    let min = Number.MAX_VALUE;  // A very large number provided by JS 
    let minIdx = 0;
    for (let j = i; j <= arr.length - 1; j++) {
        if (arr[j] < min) {
            min = arr[j];
            minIdx = j;
        }
    }
        let temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
}
console.log(arr);
