main.remove();

let newHeader = document.createElement('h1');

newHeader.textContent = "This is a new header";

newHeader.id = "victory";

if (newHeader.id === "victory") {
    console.log("The id of the <h1> element is set to 'victory'");
} else {
    console.log("The id of the <h1> element is not 'victory'");
}

newHeader.textContent = "Margarita is the champion";

document.body.appendChild(newHeader);
