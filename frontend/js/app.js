const API_URL = 'http://localhost:5000/api';

// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = (e.clientX - 15) + 'px';
    cursor.style.top = (e.clientY - 15) + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
});

// Scroll Progress
window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrolled + '%';
});

// Animated Counters
const animateCounters = () => {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + '+';
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + '+';
            }
        }, 30);
    });
};

window.addEventListener('load', animateCounters);

// Scroll Reveal Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .project-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Load Projects from API
async function loadProjects() {
    try {
        const response = await fetch(`${API_URL}/projects`);
        const projects = await response.json();
        const projectsGrid = document.getElementById('projectsGrid');
        
        projectsGrid.innerHTML = projects.map(project => `
            <div class="project-card">
                <div class="project-image">${project.emoji}</div>
                <div class="project-content">
                    <span class="project-tag">${project.category}</span>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        // Re-observe new cards
        document.querySelectorAll('.project-card').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
        // Use default projects if API fails
        loadDefaultProjects();
    }
}

// Default Projects Fallback
function loadDefaultProjects() {
    const defaultProjects = [
        {
            title: "Analytics Dashboard",
            category: "SaaS Platform",
            description: "Real-time analytics platform for tracking business metrics.",
            emoji: "📊",
            technologies: ["React", "Node.js", "MongoDB"]
        },
        {
            title: "Premium Shop Platform",
            category: "E-Commerce",
            description: "Full-featured e-commerce solution with payment processing.",
            emoji: "🛒",
            technologies: ["Next.js", "Stripe", "PostgreSQL"]
        },
        {
            title: "AI Content Generator",
            category: "AI Integration",
            description: "Intelligent content generation tool powered by advanced AI.",
            emoji: "🤖",
            technologies: ["Python", "GPT API", "FastAPI"]
        },
        {
            title: "Digital Wallet App",
            category: "FinTech",
            description: "Secure digital wallet with cryptocurrency support.",
            emoji: "💰",
            technologies: ["React Native", "Blockchain", "AWS"]
        },
        {
            title: "Property Management Portal",
            category: "Real Estate",
            description: "Comprehensive real estate platform with virtual tours.",
            emoji: "🏠",
            technologies: ["Vue.js", "Express", "Google Maps API"]
        },
        {
            title: "Code Collaboration Tool",
            category: "Developer Tool",
            description: "Real-time code editor with collaboration features.",
            emoji: "🛠️",
            technologies: ["WebSocket", "Docker", "Kubernetes"]
        }
    ];

    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = defaultProjects.map(project => `
        <div class="project-card">
            <div class="project-image">${project.emoji}</div>
            <div class="project-content">
                <span class="project-tag">${project.category}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Testimonials Slider
let currentTestimonial = 0;

function currentSlide(n) {
    showSlide(currentTestimonial = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (n >= slides.length) {
        currentTestimonial = 0;
    }
    if (n < 0) {
        currentTestimonial = slides.length - 1;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentTestimonial].classList.add('active');
    dots[currentTestimonial].classList.add('active');
}

setInterval(() => {
    currentSlide(++currentTestimonial);
}, 6000);

// Skill Bars Animation
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'skillFill 1.5s ease-out forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-progress').forEach(el => {
    skillObserver.observe(el);
});



// Magnetic Button Effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.orb').forEach(orb => {
        orb.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});

// Load projects on page load
window.addEventListener('load', loadProjects);
