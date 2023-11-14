const slider = document.querySelector(".slider")

slider.addEventListener("input", (event) => {
	slider.style.setProperty("--range-value", `${slider.value}%`)
})