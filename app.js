document.getElementById("calculate-btn").addEventListener("click", function() {
    var radius = parseFloat(document.getElementById("radius-input").value);
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid radius.");
        return;
    }

    document.getElementById("radius").innerText = radius;

    var circumference = 2 * 3.142 * radius;
    document.getElementById("circumference").innerText = circumference.toFixed(2);

    var area = 3.142 * radius * radius; 
    document.getElementById("area").innerText = area.toFixed(2);
});