const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const menuSection = document.getElementById("menuSection");
const menuLinks = menuSection.querySelectorAll("a");
const mobileQuery = window.matchMedia("(max-width: 768px)");

let menuOpen = false;
let menuTimeline;

gsap.set(menuSection, {
    yPercent: -100,
    autoAlpha: 0,
    pointerEvents: "none"
});

function openMenu() {
    if (menuOpen || !mobileQuery.matches) return;

    menuOpen = true;

    document.body.classList.add("menu-open");
    menuSection.inert = false;
    menuSection.setAttribute("aria-hidden", "false");
    menuBtn.setAttribute("aria-expanded", "true");

    if (menuTimeline) menuTimeline.kill();

    menuTimeline = gsap.timeline();

    menuTimeline.to(menuSection, {
        yPercent: 0,
        autoAlpha: 1,
        pointerEvents: "auto",
        duration: 0.65,
        ease: "power3.out"
    });

    gsap.fromTo(
        ".menuList li",
        {
            y: 24,
            autoAlpha: 0
        },
        {
            y: 0,
            autoAlpha: 1,
            duration: 0.4,
            stagger: 0.07,
            delay: 0.2,
            ease: "power2.out",
            clearProps: "transform"
        }
    );
}

function closeMenu() {
    if (!menuOpen) return;

    menuOpen = false;

    document.body.classList.remove("menu-open");
    menuBtn.setAttribute("aria-expanded", "false");

    if (menuTimeline) menuTimeline.kill();

    menuTimeline = gsap.to(menuSection, {
        yPercent: -100,
        autoAlpha: 0,
        pointerEvents: "none",
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
            menuSection.inert = true;
            menuSection.setAttribute("aria-hidden", "true");
        }
    });
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

mobileQuery.addEventListener("change", (event) => {
    if (!event.matches) {
        closeMenu();
    }
});