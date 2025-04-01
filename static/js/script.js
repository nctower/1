// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Add watermark to contact form
const contactSection = document.getElementById('contact');
const watermark = document.createElement('div');
watermark.innerHTML = `
    <svg viewBox="0 0 100 100" class="contact-watermark">
        <path d="M50 15 L65 40 L35 40 Z" fill="var(--primary-color)"/>
        <rect x="45" y="40" width="10" height="45" fill="var(--primary-color)"/>
        <circle cx="50" cy="75" r="5" fill="var(--accent-color)"/>
    </svg>
`;
contactSection.appendChild(watermark);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.getElementById('hero');
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});