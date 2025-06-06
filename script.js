
document.querySelectorAll(".offer-box input[type='radio']").forEach((radio) => {
    radio.addEventListener("change", () => {
        document.querySelectorAll(".offer-box").forEach((box) => {
            box.classList.remove("selected");
        });
        radio.closest(".offer-box").classList.add("selected");
    });
});
