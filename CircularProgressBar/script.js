const slider = document.getElementById("slider");
const border = document.getElementById("circleBorder");
const progress = document.getElementById("showProgress");

slider.addEventListener("input", () => {
    const percentage = slider.value;
    border.style.background = "conic-gradient(rgb(6, 214, 160) " + percentage + "%, black 0%)";
    progress.innerHTML = percentage + "%";
});