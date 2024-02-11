// The first two Fibonacci solutions do not use recursion. In all cases we consider the first two
// terms of the sequence to be 0 and 1.
function fibs(n) {
    let output = [0, 1];
    for (let i = 2; i < n; i++) {
        output.push(output[i - 1] + output[i - 2]);
    }
    return output[output.length - 1];
}

function fibs2(n) {
    let f1 = 0;
    let f2 = 1;
    while (n > 2) {
        let x = f1 + f2;
        f1 = f2;
        f2 = x;
        n--;
    }
    return f2;
}

function fibsRec(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;
    if (n > 2) {
        let counter = 3;
        let value;
        while (counter <= n) {
            value =  fibsRec(counter - 2) + fibsRec(counter - 1);
            counter++;
        }
        return value;
    }
}

// A better, more succint version
function fibsRec2(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;
    return fibsRec(n - 2) + fibsRec(n - 1);
}

// In this merge sort algorithm, the base case is an array of length 1 which is sorted by definition.
// Larger arrays are split in half, and mergeSort() is recursively called on those down to the
// base case of 1 element. After that, sorted sub-arrays are joined together in order until all 
// original elements are returned perfectly sorted.
function mergeSort(arr) {
    if (arr.length === 1) return arr;
    let h1 = mergeSort(arr.slice(0, arr.length / 2)); 
    let h2 = mergeSort(arr.slice(arr.length / 2, arr.length));
    let output = [];
    for (let i = 0; i < (2 * arr.length); i++) {
        if (h1[0] < h2[0] || h2.length === 0) {
            output.push(h1[0]);
            h1.shift();
        }
        else {
            output.push(h2[0]);
            h2.shift();
        }
        i++;
    }
    return output;
}