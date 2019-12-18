function swap(input, input_A, input_B) {
    const temp = input[input_A];
    input[input_A] = input[input_B];
    input[input_B] = temp;
}

function parition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)];

    while (left <= right) {
        while (items[left] < pivot) {
            left++;
        }
        while (items[right] > pivot) {
            right--;
        }

        if (left <= right) {
            swap(items, left, right);
            left++;
            right--;
        }
    }
    return left;
}

function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = parition(items, left, right);
        if (index - 1 > left) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

let arr = [10, 7, 8, 9, 1, 5];
let left = 0;
let right = arr.length - 1;
console.log(quickSort(arr, left, right));
