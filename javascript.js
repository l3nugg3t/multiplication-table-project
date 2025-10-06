console.log('Here\'s a for loop showing 1...10:\nn')
for (let i = 0; i < 10; i++) {
    console.log(`${i}\n`)
}


console.log('Here\'s a do-while loop showing 1...10:\n')
let i = 0
do {
    console.log(i + '\n')
    i++
} while (i < 10)


console.log('Here\'s a do-while loop showing 1...10:\n')
let reagan = 0
while (reagan < 10) {
    console.log(`${reagan}\n`)
    reagan++
}

console.log('Here\'s a foreach loop iterating over an array showing 1...1000:\n')
let nums = [...Array(10).keys()]
nums.forEach(num => {
    console.log(`${num}\n`)
})

console.log('Here\'s a multiplication table method rendered in the console with a for loop:\n')
let timesTable = (to) => {
    console.log(`Here\'s a times tables to ' + to \n`)

    if (Number.isInteger(to)) {
        for (let i = 1; i <= to; i++) {
            let rowContents = ""
            for (let col = 1; col <= to; col++) {
                rowContents += `${i * col}\t`
            }
            console.log(rowContents)
        }
    } else {
        console.log(`Sorry, ${to} isn't a number`)
    }
}

function getRowsDesired() {
    return Number(document.getElementById("rows").value);
}

function getColumnsDesired() {
    return Number(document.getElementById("cols").value);
}

function getHighlightValue() {
    let highlightValue = document.getElementById("highlight").value;

    if (highlightValue !== "") {
        return Number(highlightValue)
    }
}

// this method can be used to replace the 3 duplicates above = less code
function getInputValue(inputId) {
    return Number(document.getElementById(inputId).value);

}
// getRowsDesired() is equivalent to getInputAsNumber("rows")
// getColsDesired() is equivalent to getInputAsNumber("cols")
// getHighlightDesired() is equivalent to getInputAsNumber("highlight")

console.log(`should get value of rows input:`, getInputValueAsNumber('rows'))
console.log(`should get value of cols input:`, getInputValueAsNumber('cols'));
console.log(`should get value of highlight input:`, getInputValueAsNumber());

function createWithHtmlTable(rows, cols, highlight) {
    let string //define a variable called string
    if (rows && cols) {
        string = "<table>\n"

        for (let row = 1; row <= rows; row++) {

            for (let col = 1; col <= cols; col++) {
                if (highlight && (highlight === row || highlight === col)) {
                    string += "<td class='highlight'>\n"
                } else {
                    string += "<td>\n"
                }

                // string += "<td>"
                string += row * col
                string += "</td>\n"
            }

            string += "</tr>\n"
        }

        string += "<table\n"
    } else {
        string += 'Provide some inputs'
    }

    document.getElementById("output").innerHTML = string
}


console.log('highlighted value: ', getHighlightValue())

timesTable(12)

timesTable(20)

timesTable('x')