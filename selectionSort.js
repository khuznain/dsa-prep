// Selection sort algorithm
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }

    return arr;
}

console.log(selectionSort([37, 45, 29, 8]));
