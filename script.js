document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsiusInput");
    const convertBtn = document.getElementById("convertBtn");
    const result = document.getElementById("result");

    convertBtn.addEventListener("click", function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            result.textContent = fahrenheit.toFixed(2);
        } else {
            result.textContent = "Invalid input";
        }
    });
});