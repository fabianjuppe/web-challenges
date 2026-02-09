const colorSlider = document.querySelector("[data-js=input-color]");
const radiusSlider = document.querySelector("[data-js=input-radius]");
const rotationSlider = document.querySelector("[data-js=input-rotation]");
const box = document.querySelector("[data-js=box]");

colorSlider.addEventListener("input", () => {
    box.style.background = `hsl(${colorSlider.value}, 70%, 60%)`;
});

radiusSlider.addEventListener("input", () => {
    box.style.borderRadius = `${radiusSlider.value}%`;
});

rotationSlider.addEventListener("input", () => {
    box.style.transform = `rotate(${rotationSlider.value}deg)`;
});
