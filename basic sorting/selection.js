//-----------  Selection sort  ------------//

let selectionFun = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = Number.MAX_VALUE;
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
    return arr;
}
let arr = [3, 9, 52, 1, 5, 11];
console.log(selectionFun(arr));
