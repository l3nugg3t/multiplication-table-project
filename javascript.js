alert('hello world')


console.log('Here\'s a for loop showing 1...10:\nn')
for (let i = 0; i < 10; i++) {
    console.log(`${ i }\n`)
}


console.log('Here\'s a do-while loop showing 1...10:\n')
let i  = 0
do {
    console.log(i + '\n')
    i++
} while  (i < 10)


console.log('Here\'s a do-while loop showing 1...10:\n')
let reagan = 0
while (reagan < 10) {
    console.log(`${ reagan }\n`)
    reagan++
}

console.log('Here\'s a foreach loop iterating over an array showing 1...1000:\n')
let nums = [...Array(10).keys()]
nums.forEach(num => {
    console.log(`${ num }\n`)
})

console.log('Here\'s a multiplication table method rendered in the console with a for loop:\n')
let timesTable = (to) => {
    console.log(`Here\'s a times tables to ' + to \n`)

    if (Number.isInteger(to)) {
    for (let i = 1; i <= to; i++) {
        let row = ""
        for (let j = 1; j <= to; j++) {
            row += `${ i * j }\t`
        }
        console.log(row)
    }
    } else {
        console.log(`Sorry, ${to} isn't a number`)
    }
}

timesTable(4)

timesTable(12)

timesTable('x')