"use strict";
console.log(bubbleSort([-4,0,-2,3,6,4,-3]));

function bubbleSort(arr) {
    let is_sorted=false
    while (!is_sorted) {
        is_sorted=true
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {
                let tmp_arr = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp_arr;
                is_sorted=false;
            }

        }
    }

    return arr;
}