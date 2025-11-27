// script.js
gsap.registerPlugin(ScrollTrigger);

// Hero Animation
const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

tl.to(".hero-bg", { scale: 1, duration: 2.5, ease: "power2.inOut" })
  .to(".hero-subtitle:first-of-type", { opacity: 1, y: 0, duration: 0.8 }, "-=1.8")
  .to(".hero-title", { opacity: 1, y: 0, duration: 1 }, "-=1.2")
  .to(".hero-subtitle:last-of-type", { opacity: 1, y: 0, duration: 1 }, "-=0.8")
  .to(".hero-btn", { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.6");

// Cards Animation
const cards = document.querySelectorAll('.package-card');
cards.forEach((card) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});

// Gallery Animation
gsap.from(".gallery-item", {
    scrollTrigger: {
        trigger: "#gallery",
        start: "top 75%"
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
});

// Navbar Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'py-2');
        navbar.classList.remove('py-4');
    } else {
        navbar.classList.remove('shadow-lg', 'py-2');
        navbar.classList.add('py-4');
    }
});
