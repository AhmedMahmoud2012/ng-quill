


function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (right > index) {
            quickSort(items, index, right);
        }
    }
    return items;
}

function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)];
    while (left <= right) {
        while (items[left] < pivot) {
            left++;
        }
        while (items[right] > pivot) {
            right--;
        }
        if (left <= right) {
            let temp = items[left];
            items[left] = items[right];
            items[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}


let true_arr = [3, 1, 4, 6, 5];
let false_arr = [10, 4, 6, 12, 5];

function doubleArr(items) {
    for (let i = 0; i < items.length; i++) {
        items[i] = Math.pow(items[i], 2);
    }
    quickSort(items, 0, items.length - 1);
}


function core() {
    doubleArr(true_arr);
    console.log(true_arr);

    let max = true_arr.length - 1;
    let left = 0;
    let right = max - 1;

    while (left < right) {
        while (true_arr[left] + true_arr[right] < true_arr[max]) {
            left++;
        }
        while (true_arr[left] + true_arr[right] > true_arr[max]) {
            right--;
        }

        if (true_arr[left] + true_arr[right] === true_arr[max]) return true;

        if (left == right) {
            max--;
            left = 0;
            right = max - 1;
        }
        console.log(left, right);
    }
    return false;
}


console.log(core());
