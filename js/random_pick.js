/*
modified solution from:
https://stackoverflow.com/questions/69335458/weighted-probability-random-choice-array
*/

// Binary search to choose a element in an array based on weight. 
function find(arr, x, start = 0, end = arr.length) {
    if (end < start)
        return -1;

    else if (end == start)
        return end;

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) 
        return mid + 1;

    else if (arr[mid] < x) 
        return find(arr, x, mid + 1, end);

    else    
        return find(arr, x, start, mid);
}

const weight_table = [0.0133, 0.4567] // from spreadsheet: [1.33% (0.0133), 45.67% (0.4567), 52.0% (0.52)] 
const values = [0,1,2]; // corresponds with small fleet, medium fleet, and large fleet respectively

function random_pick(items, weights) {
    return items[find(weights, Math.random())];
}


