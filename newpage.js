// I took help from chatgpt here, most of js code made by chatgpt.

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("classForm");
    const tableBody = document.querySelector("#classTable tbody");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const className = document.getElementById("className").value;
        const numPeople = document.getElementById("numPeople").value;
        const description = document.getElementById("description").value;

        const newRow = tableBody.insertRow();
        newRow.insertCell(0).textContent = className;
        newRow.insertCell(1).textContent = numPeople;
        newRow.insertCell(2).textContent = description;

      
        newRow.addEventListener("click", function () {
            console.log(`Class: ${className}, People: ${numPeople}, Description: ${description}`);
            newRow.classList.toggle("highlight");
        });

   
        newRow.addEventListener("mouseover", function () {
            newRow.style.backgroundColor = "#a3a2a2";
        });
        newRow.addEventListener("mouseout", function () {
            newRow.style.backgroundColor = "";
        });

        form.reset();
    });


    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.addEventListener("focus", function () {
            input.style.borderColor = "blue";
        });
        input.addEventListener("blur", function () {
            input.style.borderColor = "";
        });
    });


    document.getElementById('classTable').addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'TD') {
            target.parentNode.remove();
        }
    });
});
