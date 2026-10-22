
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
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
