
function redirect() {
    window.location.href = 'blog.html';
}


let serial = 0;

// For First Card
document.getElementById('triangle-calculate-btn').addEventListener('click', function () {
    serial += 1;
    const triangleTitle = document.getElementById('triangle-title').innerText;
    const triangleBase = document.getElementById('triangle-base-input').value;
    const triangleHeight = document.getElementById('triangle-height-input').value;

    // Validation
    if (
        triangleBase == "" ||
        triangleHeight == "" ||
        triangleBase <= 0 ||
        triangleHeight <= 0
    ) {
        return alert("Please enter valid number!!!");
    }

    //  Area Calculation
    const triangleArea = 0.5 * parseFloat(triangleBase) * parseFloat(triangleHeight);

    displayData(triangleTitle, triangleArea);

})

// For Second Card
document.getElementById('rectangle-calculate-btn').addEventListener('click', function () {
    serial += 1;
    const rectangleTitle = document.getElementById('rectangle-title').innerText;
    const rectangleWidth = document.getElementById('rectangle-width-input').value;
    const rectangleLength = document.getElementById('rectangle-length-input').value;

    if (
        rectangleWidth == "" ||
        rectangleLength == "" ||
        rectangleWidth <= 0 ||
        rectangleLength <= 0
    ) {
        return alert("Please enter valid number!!!");
    }

    const rectangleArea = parseFloat(rectangleWidth) * parseFloat(rectangleLength);

    displayData(rectangleTitle, rectangleArea);

})

// For Third Card
document.getElementById('parallelogram-calculate-btn').addEventListener('click', function () {
    serial += 1;
    const parallelogramTitle = document.getElementById('parallelogram-title').innerText;
    const parallelogramBase = document.getElementById('parallelogram-base-input').value;
    const parallelogramHeight = document.getElementById('parallelogram-height-input').value;

    if (
        parallelogramBase == "" ||
        parallelogramHeight == "" ||
        parallelogramBase <= 0 ||
        parallelogramHeight <= 0
    ) {
        return alert("Please enter valid number!!!");
    }

    const parallelogramArea = parseFloat(parallelogramBase) * parseFloat(parallelogramHeight);

    displayData(parallelogramTitle, parallelogramArea);

})

// For Fourth Card
document.getElementById('rhombus-calculate-btn').addEventListener('click', function () {
    serial += 1;
    const rhombusTitle = document.getElementById('rhombus-title').innerText;
    const rhombusDiagonal1 = document.getElementById('rhombus-diagonal1-input').value;
    const rhombusDiagonal2 = document.getElementById('rhombus-diagonal2-input').value;

    if (
        rhombusDiagonal1 == "" ||
        rhombusDiagonal2 == "" ||
        rhombusDiagonal1 <= 0 ||
        rhombusDiagonal2 <= 0
    ) {
        return alert("Please enter valid number!!!");
    }

    const rhombusArea = 0.5 * parseFloat(rhombusDiagonal1) * parseFloat(rhombusDiagonal2);

    displayData(rhombusTitle, rhombusArea);

})

// For Fifth Card
document.getElementById('pentagon-calculate-btn').addEventListener('click', function () {
    serial += 1;
    const pentagonTitle = document.getElementById('pentagon-title').innerText;
    const pentagonPerimeter = document.getElementById('pentagon-perimeter-input').value;
    const pentagonBase = document.getElementById('pentagon-base-input').value;

    if (
        pentagonPerimeter == "" ||
        pentagonBase == "" ||
        pentagonPerimeter <= 0 ||
        pentagonBase <= 0
    ) {
        return alert("Please enter valid number!!!");
    }

    const pentagonArea = 0.5 * parseFloat(pentagonPerimeter) * parseFloat(pentagonBase);

    displayData(pentagonTitle, pentagonArea);

})

// For sixth Card
document.getElementById('ellipse-calculate-btn').addEventListener('click', function () {
    serial += 1;
    const ellipseTitle = document.getElementById('ellipse-title').innerText;
    const ellipseAxisA = document.getElementById('ellipse-axis-a-input').value;
    const ellipseAxisB = document.getElementById('ellipse-axis-b-input').value;

    if (
        ellipseAxisA == "" ||
        ellipseAxisB == "" ||
        ellipseAxisA <= 0 ||
        ellipseAxisB <= 0
    ) {
        return alert("Please enter valid number!!!");
    }

    const ellipseArea = 3.1416 * parseFloat(ellipseAxisA) * parseFloat(ellipseAxisB);

    displayData(ellipseTitle, ellipseArea);

})


// common function to display data
function displayData(title, area) {
    const tableData = document.getElementById('table-data');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${title}</td>
    <td>${area}cm²</td>
    <td><button class="btn btn-sm border-0 bg-sky-500 m-4 px-6 normal-case font-semibold">Covert to m<sup>2</sup></button></td>
    `;
    tableData.appendChild(tr);
}