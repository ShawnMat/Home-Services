
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


const serviceCards = document.querySelectorAll(".serviceCard");
const serviceImage = document.querySelector(".serviceImage");
const serviceImageWrapper = document.querySelector(".serviceImageWrapper");
const backToServices = document.querySelector(".backToServices");

serviceCards.forEach((card) => {
    const description = document.createElement("div");
    description.classList.add("serviceDescription");
    description.textContent = card.dataset.description;
    card.appendChild(description);

    card.addEventListener("click", () => {
        if (card.classList.contains("selected")) return;

        serviceCards.forEach((item) => {
            item.classList.remove("selected");
            if (item !== card) {
                gsap.to(item, {
                    autoAlpha: 0,
                    height: 0,
                    marginTop: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    borderWidth: 0,
                    duration: 0.3,
                    onComplete: () => {
                        item.style.display = "none";
                    }
                });
            }
        });

        card.classList.add("selected");
        backToServices.classList.add("visible");

        gsap.fromTo(card, {
            x: -15
        }, {
            x: 0,
            duration: 0.45,
            ease: "power2.out"
        });

        serviceImage.style.visibility = "hidden";

        serviceImage.onload = () => {
            gsap.fromTo(serviceImage, {
                autoAlpha: 0,
                x: 30
            }, {
                autoAlpha: 1,
                x: 0,
                duration: 0.6,
                ease: "power2.out"
            });
        };

        serviceImage.onerror = () => {
            console.error("Unable to load service image:", serviceImage.src);
            serviceImage.style.visibility = "visible";
        };

        serviceImage.src = card.dataset.image;
        serviceImage.alt = card.querySelector("p").textContent;

        if (serviceImage.complete && serviceImage.naturalWidth > 0) {
            gsap.fromTo(serviceImage, {
                autoAlpha: 0,
                x: 30
            }, {
                autoAlpha: 1,
                x: 0,
                duration: 0.6,
                ease: "power2.out"
            });
        }
    });
});

backToServices.addEventListener("click", () => {
    serviceCards.forEach((card) => {
        card.classList.remove("selected");
        card.style.display = "block";

        gsap.set(card, {
            clearProps: "all"
        });
    });

    backToServices.classList.remove("visible");

    gsap.fromTo(serviceCards, {
        autoAlpha: 0,
        y: 15
    }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out"
    });

    gsap.to(serviceImage, {
        autoAlpha: 1,
        x: 0,
        duration: 0.4
    });
});
