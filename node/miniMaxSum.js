'use strict';

// const for = require("core-js/fn/symbol");

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let laagste = null
    let hoogste = null
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (arr[i] < laagste || laagste == null) laagste = arr[i]
        if(arr[i] > hoogste || hoogste == null) hoogste = arr[i]
    }
    let min = sum - hoogste
    let mad = sum - laagste
    console.log(min ,mad)

}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
