const slider = document.getElementById("slider");
const border = document.getElementById("circleBorder");
const progress = document.getElementById("showProgress");
slider.addEventListener("input",()=>{
    let degrees = slider.value * 3.6;
    border.style.background = "conic-gradient(rgb(6, 214, 160) "+degrees+"deg, black 0deg)";
    progress.innerHTML = slider.value+"%";
});