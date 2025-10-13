
// this method can be used to replace the 3 duplicates above = less code
function getInputValueAsNumber(inputId) {
    if (document.getElementById(inputId)) {
        if (document.getElementById(inputId).value !== null) {
            return Number(document.getElementById(inputId).value);
        } else {
            console.log("sorry, value isn't present for this ID: ", inputId);
        }
    } else {
        console.log("Sorry, couldn\'t find this ID: ", inputId)
    }
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

