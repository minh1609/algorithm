function findNumber(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k) {
            return "YES";
        }
    }
    return "NO";
}
function minimumSwaps(arr) {
    var counter = 0;

    for (var i = arr.length; i > 0; i--) {
        var minval = Math.min(...arr);

        var minIndex = arr.indexOf(minval);
        if (minval !== arr[0]) {
            var temp = arr[0];
            arr[0] = arr[minIndex];
            arr[minIndex] = temp;

            arr.splice(0, 1);
            counter++;
        } else {
            arr.splice(0, 1);
        }
    }
    return counter;
}
console.log(minimumSwaps([1, 5, 3, 4]));
