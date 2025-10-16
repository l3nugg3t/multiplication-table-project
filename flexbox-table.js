function getRowsDesired() {
    return parseInt(document.getElementById("rows").value)
}

function getColumnsDesired() {
    return parseInt(document.getElementById("cols").value)
}

function createWithFlexbox(rows, cols) {
    let string = ''

    // first do-while loop to build the flex'd rows
    let row = 1
    do {
        string += "<div class='row'>"
        string += row

        // second do-while loop to build the flex'd columns
        let col = 1
        do {
            string += "<div class='col'>"
            string += row * col
            string += "</div>"

            col = col + 1
        } while (col <= cols)
        string += "</div>\n"

        row = row + 1;
    } while (row <= rows)

    document.getElementById("output").innerHTML = string
}