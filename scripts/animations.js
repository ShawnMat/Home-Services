gsap.registerPlugin(ScrollTrigger);

gsap.set("#menuSection", {
    yPercent: -100,
    autoAlpha: 0
});

function openMenuAnimation() {
    gsap.to("#menuSection", {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: "power3.out"
    });
}

function closeMenuAnimation() {
    gsap.to("#menuSection", {
        yPercent: -100,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.in"
    });
}
