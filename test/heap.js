var array_length;
function heap_root(input, i) {
    let left = (2 * i) + 1;
    let right = (2 * i) + 2;
    let max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }
    if (right < array_length && input[right] > input[max]) {
        max = right;
    }
    if (i != max) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, input_A, input_B) {
    const temp = input[input_A];
    input[input_A] = input[input_B];
    input[input_B] = temp;
}

var arr = [3, 0, 2, 5, -1, 4, 1];
array_length = arr.length;
for (let i = Math.floor(array_length / 2); i >= 0; i--) {
    heap_root(arr, i);
}
// console.log(arr);

for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    array_length--;
    heap_root(arr, 0);
    console.log(arr);
}
console.log(arr);
