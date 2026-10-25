
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const heroSection = document.getElementById('heroSection');

menu.addEventListener("click", function () {
    heroSection.classList.add('disable');
    openMenuAnimation();
});

close.addEventListener("click", function () {
    closeMenuAnimation();

    gsap.delayedCall(0.6, function () {
        heroSection.classList.remove('disable');
    });
});
