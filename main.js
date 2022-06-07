const GENERATE = document.querySelector('#generate');
const RGBTEXT = document.querySelector('#rgb');
const SAVE = document.querySelector('#save');
const LIST = document.querySelector('#color-saves');

let switched = true;

let color = {
    r: 255,
    g: 255,
    b: 255,
    a: 1
};

function changeColor() {
    // generate new color object
    color.r = parseInt(Math.random()*256);
    color.g = parseInt(Math.random()*256);
    color.b = parseInt(Math.random()*256);
    color.a = Math.round(Math.random()*100)/100;

    // display color on header
    GENERATE.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b}, ${color.a})`;

    // display rgba
    RGBTEXT.textContent = `Current RGBA: ${color.r}, ${color.g}, ${color.b}, ${color.a}`;
}

GENERATE.addEventListener("click", e => {
    changeColor();
    switched = true;
});

SAVE.addEventListener("click", e => {
    if (switched) {
        let newItem = document.createElement("li");
        let newContent = document.createTextNode(`RGBA: ${color.r}, ${color.g}, ${color.b}, ${color.a}`);
        newItem.appendChild(newContent);
        newItem.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
        newItem.style.margin = '0';
        LIST.insertBefore(newItem, LIST.firstElementChild);
        switched = false;
    } else {
        alert("You've already saved this color!");
    }
});
