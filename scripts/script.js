
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const heroSection = document.getElementById('heroSection');

menuBtn.addEventListener("click", function () {
    heroSection.classList.add('disable');
    openMenuAnimation();
});

closeBtn.addEventListener("click", function () {
    closeMenuAnimation();

    gsap.delayedCall(0.6, function () {
        heroSection.classList.remove('disable');
    });
});
