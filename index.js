const screen = document.querySelector("#screen input");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "AC") {
            screen.value = "";
        } else if (value === "C") {
            screen.value = screen.value.slice(0, -1);
        } else if (value === "OFF") {
            screen.value = "";
            alert("Máy tính đã tắt!");
        } else if (value === "=") {
            try {
                const expression = screen.value
                    .replace(/x/g, '*')
                    .replace(/:/g, '/');
                screen.value = eval(expression);
            } catch {
                screen.value = "Lỗi!";
            }
        } else {
            screen.value += value;
        }
    });
});