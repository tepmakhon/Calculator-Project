const display = document.getElementById("display");

document.addEventListener("keydown", (e) => {
    const key = e.key;
    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
        append(key);
    } 
    else if (key === "Enter") {
        e.preventDefault();
        calculate();
    } 
    else if (key === "Backspace") {
        backspace();
    } 
    else if (key === "Escape") {
        clearDisplay();
    }
});
function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = Function("return " + display.value)();
    } catch {
        display.value = "Error";
    }
}