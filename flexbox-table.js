function getInputValueAsNumber(id) {
    const el = document.getElementById(id);
    const n = Number(el && el.value);
    return Number.isFinite(n) ? n : 0;
}

function createWithFlexTable(rows, cols, highlight) {
    let html = "";

    if (rows && cols) {
        html += '<div class="table">';
        for (let row = 1; row <= rows; row++) {
            html += `<div class="t-row${highlight === row ? " highlight" : ""}">`;
            for (let col = 1; col <= cols; col++) {
                html += `<div class="t-data">${row * col}</div>`;
            }
            html += "</div>";
        }
        html += "</div>";
    } else {
        html = "<p>Provide some inputs</p>";
    }

    document.getElementById("output").innerHTML = html;
}

// Wire up the button (avoid inline onClick)
document.getElementById("generate").addEventListener("click", () => {
    const rows = getInputValueAsNumber("rows");
    const cols = getInputValueAsNumber("cols");
    createWithFlexTable(rows, cols);
});
