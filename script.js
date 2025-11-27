// script.js
gsap.registerPlugin(ScrollTrigger);

// Mobile Menu Logic
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const links = document.querySelectorAll('.mobile-link');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Close menu when clicking a link
links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

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
        start: "top 85%" // Trigger slightly earlier on mobile
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
});

// Navbar Scroll Logic
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'py-2');
        navbar.classList.remove('py-3');
    } else {
        navbar.classList.remove('shadow-lg', 'py-2');
        navbar.classList.add('py-3');
    }
});
