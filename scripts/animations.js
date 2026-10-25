gsap.registerPlugin(ScrollTrigger);

gsap.from(".heroText p", {
    y: 30,
    autoAlpha: 0,
    duration: 0.8,
    delay: 0.15,
    ease: "power3.out"
});

gsap.from(".heroText small", {
    y: 20,
    autoAlpha: 0,
    duration: 0.7,
    delay: 0.35,
    ease: "power3.out"
});

gsap.from(".CTAbtn", {
    y: 16,
    autoAlpha: 0,
    duration: 0.6,
    delay: 0.5,
    ease: "power3.out"
});

gsap.utils.toArray(".contentSection").forEach((section) => {
    gsap.from(section.children, {
        y: 24,
        autoAlpha: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true
        }
    });
});