// Smooth animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Copy Discord tag to clipboard
function copyDiscord() {
    const discordTag = 'N5ZA';
    
    // Create temporary input
    const tempInput = document.createElement('input');
    tempInput.value = discordTag;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    
    // Visual feedback
    const discordBtn = document.querySelector('.social-btn.discord');
    const originalText = discordBtn.querySelector('span:not(.tooltip)').textContent;
    const tooltip = discordBtn.querySelector('.tooltip');
    
    tooltip.textContent = 'Copied!';
    tooltip.style.opacity = '1';
    
    setTimeout(() => {
        tooltip.textContent = 'Click to Copy';
        tooltip.style.opacity = '0';
    }, 2000);
}

// Parallax effect for background
document.addEventListener('mousemove', (e) => {
    const background = document.querySelector('.background-animation');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    background.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
});

// Add subtle cursor effect
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Cursor hover effects on interactive elements
const interactiveElements = document.querySelectorAll('a, .social-btn, .project-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// Add custom cursor styles dynamically
const style = document.createElement('style');
style.textContent = `
    .custom-cursor {
        width: 20px;
        height: 20px;
        border: 2px solid rgba(99, 102, 241, 0.6);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: transform 0.2s ease, border-color 0.2s ease;
        z-index: 9999;
        mix-blend-mode: difference;
    }
    
    body {
        cursor: none;
    }
    
    a, button, .social-btn, .project-card {
        cursor: none;
    }
`;
document.head.appendChild(style);
