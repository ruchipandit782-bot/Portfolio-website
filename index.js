// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Offset for sticky nav
            behavior: 'smooth'
        });
    });
});

// 2. Form Submission Handling (Interactive UI)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// 3. Custom "Anti-Gravity" Feature
const antigravityBtn = document.getElementById('antigravity-btn');
const skills = document.querySelectorAll('.skill-tag');
let isFloating = false;

antigravityBtn.addEventListener('click', () => {
    isFloating = !isFloating;
    
    if (isFloating) {
        antigravityBtn.innerText = "🌍 Restore Gravity";
        skills.forEach(skill => {
            // Generate random floating coordinates and rotations
            const randomX = (Math.random() * 100 - 50) + 'px';
            const randomY = (Math.random() * -150 - 50) + 'px'; // Move upwards
            const randomRot = (Math.random() * 40 - 20) + 'deg';
            
            // Set CSS variables for the keyframe animation
            skill.style.setProperty('--x', randomX);
            skill.style.setProperty('--y', randomY);
            skill.style.setProperty('--rot', randomRot);
            
            // Add staggered delay so they don't move in sync
            skill.style.animationDelay = (Math.random() * 2) + 's';
            skill.classList.add('floating');
        });
    } else {
        antigravityBtn.innerText = "🚀 Toggle Anti-Gravity Mode";
        skills.forEach(skill => {
            skill.classList.remove('floating');
            // Reset styles
            skill.style.transform = 'none';
        });
    }
});