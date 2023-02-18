
let serial = 0;

// For First Card
document.getElementById('triangle-calculate-btn').addEventListener('click', function () {
    serial += 1;
    const triangleTitle = document.getElementById('triangle-title').innerText;
    const triangleBase = document.getElementById('triangle-base-input').value;
    const triangleHeight = document.getElementById('triangle-height-input').value;

    const triangleArea = 0.5 * parseFloat(triangleBase) * parseFloat(triangleHeight);

    displayData(triangleTitle, triangleArea);
  
})


// common function to display data
function displayData(triangleTitle, triangleArea) {
    const tableData = document.getElementById('table-data');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${triangleTitle}</td>
    <td>${triangleArea}cm²</td>
    `;
    tableData.appendChild(tr);
}