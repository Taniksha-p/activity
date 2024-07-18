let generateBtn = document.querySelector("#generateColorBtn");
let copyBtn = document.querySelector("#copyColorBtn");

generateBtn.addEventListener("click", function() {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    
    let div = document.querySelector("#colorDisplay");
    div.style.backgroundColor = randomColor;
    div.innerText = randomColor;
    
    console.log("Color updated");
});

copyBtn.addEventListener("click", function() {
    let div = document.querySelector("#colorDisplay");
    let color = div.innerText;
    copyToClipboard(color);
    alert("Copied to clipboard: " + color);
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard successfully!');
    }, (err) => {
        console.error('Could not copy text: ', err);
    });
}
