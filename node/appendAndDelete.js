"use strict"

// const { for, for } = require('core-js/fn/symbol');
const fs = require("fs")

process.stdin.resume()
process.stdin.setEncoding("utf-8")

let inputString = ""
let currentLine = 0

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin
})

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""))

  main()
})

function readLine() {
  return inputString[currentLine++]
}

// Complete the appendAndDelete function below.
// function appendAndDelete(s, t, k) {
//   let li = t.length + s.length
//   if (li <= k) return "Yes"
//   let j = 0
//   for (let i = 0; i < Math.min(t.length, s.length); i++) {
//     if (s[i] != t[i]) {
//         break
//     }
//     j = i
//   }

//   let overS = s.length - j -1
//   let overT = t.length - j -1
//   let zetten = overS + overT
//   if (zetten <= k) return "Yes"
//   if ((k-z) % 2 == 0) return "Yes"
//   return "No"
// }

function appendAndDelete (s, t, k) {
    let o = s.length + t.length
    if (k > o) return 'Yes'
    for (let i = 0, l = Math.min(s.length, t.length); i < l; i++, o -= 2) {
        if (s[i] !== t[i]) break
    }
    return o > k || (k - o) % 2 !== 0 ? 'No' : 'Yes'
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const s = readLine()

  const t = readLine()

  const k = parseInt(readLine(), 10)

  let result = appendAndDelete(s, t, k)

  ws.write(result + "\n")

  ws.end()
}
