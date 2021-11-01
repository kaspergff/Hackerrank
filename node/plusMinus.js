'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
    let pos=0, neg=0,zer = 0
    arr.forEach(e => {
        if (e > 0 ) pos++
        if (e< 0) neg++
        if(e ==0) zer++
        
    });

    pos = (pos/arr.length).toFixed(6)
    neg = (neg/arr.length).toFixed(6)
    zer = (zer/arr.length).toFixed(6)
    console.log(pos)
    console.log(neg)
    console.log(zer)
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
