let i, j;
let root = document.getElementById("root");

for (i = 1; i <= 9; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    root.appendChild(row);

    for (j = 1; j <= 9; j++) {
        let cell = document.createElement("div"); // <div>

        if (i === j) { // <div class="a b"
            cell.setAttribute("class", "cell cell-main");            
        }
        else if (j < i) {
            cell.setAttribute("class", "cell cell-omain")
        }
        else {
            cell.setAttribute("class", "cell cell-umain");
        }

        cell.innerText = i * j;
        row.appendChild(cell);
    }
    
}
