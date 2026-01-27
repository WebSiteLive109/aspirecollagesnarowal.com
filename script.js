// ===== ADVANCED ANIMATION SYSTEM =====
let isAnimationsInitialized = false;

function initAdvancedAnimations() {
    if (isAnimationsInitialized) return;
    
    createAnimationBars();
    createBorderAnimation();
    createParticles();
    createLogoBackground();
    createSliderBars();
    createMovingElements();
    initScrollEffects();
    
    isAnimationsInitialized = true;
}

function createAnimationBars() {
    const barsContainer = document.getElementById('barsAnimation');
    if (!barsContainer) return;
    
    barsContainer.innerHTML = '';
    
    for (let i = 0; i < 20; i++) {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.setProperty('--i', i);
        
        const colors = [
            `linear-gradient(45deg, var(--bar-color-1), var(--bar-color-2))`,
            `linear-gradient(45deg, var(--bar-color-3), var(--bar-color-4))`,
            `linear-gradient(45deg, var(--bar-color-5), var(--bar-color-6))`,
            `linear-gradient(45deg, var(--bar-color-7), var(--bar-color-8))`,
            `linear-gradient(45deg, var(--bar-color-9), var(--bar-color-10))`
        ];
        
        bar.style.background = colors[i % colors.length];
        barsContainer.appendChild(bar);
    }
}

function createBorderAnimation() {
    const borderContainer = document.getElementById('borderAnimation');
    if (!borderContainer) return;
    
    borderContainer.innerHTML = '';
    
    const positions = ['top', 'right', 'bottom', 'left'];
    positions.forEach(pos => {
        const line = document.createElement('div');
        line.className = `border-line ${pos}`;
        line.style.animationDuration = `${15 + Math.random() * 10}s`;
        borderContainer.appendChild(line);
    });
}

function createParticles() {
    const particlesContainer = document.getElementById('particlesContainer');
    if (!particlesContainer) return;
    
    particlesContainer.innerHTML = '';
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 10 + 2;
        const tx = Math.random() * 2 - 1;
        const ty = Math.random() * 2 - 1;
        const duration = 20 + Math.random() * 20;
        const delay = Math.random() * 20;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.setProperty('--tx', tx);
        particle.style.setProperty('--ty', ty);
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        const colors = [
            'var(--theme-primary)',
            'var(--theme-secondary)',
            'var(--theme-accent)',
            'var(--bar-color-1)',
            'var(--bar-color-2)',
            'var(--bar-color-3)'
        ];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
    }
}

function createLogoBackground() {
    const logoContainer = document.getElementById('logoBackground');
    if (!logoContainer) return;
    
    logoContainer.innerHTML = '';
    
    for (let i = 0; i < 5; i++) {
        const logoText = document.createElement('div');
        logoText.className = 'logo-text';
        logoText.textContent = 'ASPIRE COLLEGES NARROWAL';
        logoText.style.top = `${20 + i * 20}%`;
        logoText.style.animationDuration = `${40 + i * 10}s`;
        logoText.style.animationDelay = `${i * 5}s`;
        logoContainer.appendChild(logoText);
    }
}

function createSliderBars() {
    const sliderContainer = document.getElementById('sliderBars');
    if (!sliderContainer) return;
    
    sliderContainer.innerHTML = '';
    
    for (let i = 0; i < 10; i++) {
        const slider = document.createElement('div');
        slider.className = 'slider-bar';
        
        const top = Math.random() * 100;
        const rotate = Math.random() * 360;
        const duration = 10 + Math.random() * 20;
        const delay = Math.random() * 10;
        const colorIndex = Math.floor(Math.random() * 10) + 1;
        
        slider.style.top = `${top}%`;
        slider.style.setProperty('--rotate', `${rotate}deg`);
        slider.style.animationDuration = `${duration}s`;
        slider.style.animationDelay = `${delay}s`;
        slider.style.background = `linear-gradient(90deg, 
            transparent,
            var(--bar-color-${colorIndex}),
            transparent
        )`;
        
        sliderContainer.appendChild(slider);
    }
}

function createMovingElements() {
    const movingContainer = document.getElementById('movingContainer');
    if (!movingContainer) return;
    
    movingContainer.innerHTML = '';
    
    createMovingImages();
    createMovingText();
    createMovingIcons();
    
    animateMovingElements();
}

function createMovingImages() {
    const movingContainer = document.getElementById('movingContainer');
    
    for (let i = 0; i < 8; i++) {
        const movingElement = document.createElement('div');
        movingElement.className = 'moving-element moving-image';
        
        const size = 100 + Math.random() * 200;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const speed = 0.2 + Math.random() * 0.3;
        
        movingElement.style.width = `${size}px`;
        movingElement.style.height = `${size}px`;
        movingElement.style.left = `${left}%`;
        movingElement.style.top = `${top}%`;
        movingElement.dataset.speed = speed;
        
        movingContainer.appendChild(movingElement);
    }
}

function createMovingText() {
    const movingContainer = document.getElementById('movingContainer');
    const texts = [
        'ASPIRE COLLEGES',
        'EXCELLENCE',
        'EDUCATION',
        'FUTURE',
        'LEADERS',
        'INNOVATION',
        'KNOWLEDGE',
        'SUCCESS'
    ];
    
    for (let i = 0; i < texts.length; i++) {
        const movingElement = document.createElement('div');
        movingElement.className = 'moving-element moving-text';
        
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const speed = 0.1 + Math.random() * 0.2;
        
        movingElement.textContent = texts[i];
        movingElement.style.left = `${left}%`;
        movingElement.style.top = `${top}%`;
        movingElement.dataset.speed = speed;
        
        movingContainer.appendChild(movingElement);
    }
}

function createMovingIcons() {
    const movingContainer = document.getElementById('movingContainer');
    const icons = [
        'fa-graduation-cap',
        'fa-book',
        'fa-flask',
        'fa-atom',
        'fa-laptop-code',
        'fa-microscope',
        'fa-chart-line',
        'fa-lightbulb',
        'fa-globe',
        'fa-users'
    ];
    
    for (let i = 0; i < icons.length; i++) {
        const movingElement = document.createElement('div');
        movingElement.className = 'moving-element moving-icon';
        
        const size = 40 + Math.random() * 60;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const speed = 0.15 + Math.random() * 0.25;
        
        movingElement.innerHTML = `<i class="fas ${icons[i]}"></i>`;
        movingElement.style.fontSize = `${size}px`;
        movingElement.style.left = `${left}%`;
        movingElement.style.top = `${top}%`;
        movingElement.dataset.speed = speed;
        
        movingContainer.appendChild(movingElement);
    }
}

function animateMovingElements() {
    const movingElements = document.querySelectorAll('.moving-element');
    if (!movingElements.length) return;
    
    let lastTime = 0;
    
    function animate(time) {
        const delta = time - lastTime;
        lastTime = time;
        
        movingElements.forEach(el => {
            const speed = parseFloat(el.dataset.speed) || 0.2;
            const x = Math.sin(time * 0.001 * speed) * 100;
            const y = Math.cos(time * 0.001 * speed * 0.7) * 80;
            const rotation = Math.sin(time * 0.001 * speed * 0.5) * 10;
            
            el.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
        });
        
        requestAnimationFrame(animate);
    }
    
    requestAnimationFrame(animate);
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    let ticking = false;
    let lastScrollY = 0;
    
    function onScroll() {
        lastScrollY = window.scrollY;
        
        if (!ticking) {
            requestAnimationFrame(() => {
                updateScrollEffects(lastScrollY);
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', onScroll);
    updateScrollEffects(window.scrollY);
}

function updateScrollEffects(scrollY) {
    const moveElements = document.querySelectorAll('.scroll-move');
    const speed = 0.5;
    
    moveElements.forEach(el => {
        const offset = scrollY * speed;
        el.style.transform = `translateY(${offset * 0.5}px) rotate(${offset * 0.01}deg)`;
    });
    
    const movingContainer = document.getElementById('movingContainer');
    if (movingContainer) {
        movingContainer.style.transform = `translateY(${scrollY * 0.1}px)`;
    }
    
    const bars = document.querySelectorAll('.bars-animation .bar');
    bars.forEach((bar, i) => {
        const speedMultiplier = 1 + (scrollY * 0.0001 * (i % 3 + 1));
        bar.style.animationDuration = `${4 / speedMultiplier}s`;
    });
}

// ===== THEME SYSTEM =====
function initThemeSelector() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeSelector = document.getElementById('themeSelector');
    const themeColors = document.querySelectorAll('.theme-color');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme') || 'default';
    
    applyTheme(currentTheme);
    
    themeToggleBtn?.addEventListener('click', function() {
        themeSelector.classList.toggle('active');
    });
    
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.theme-selector') && 
            !event.target.closest('.theme-toggle-btn')) {
            themeSelector.classList.remove('active');
        }
    });
    
    themeColors.forEach(color => {
        color.addEventListener('click', function() {
            const theme = this.dataset.theme;
            applyTheme(theme);
            
            themeColors.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            themeSelector.classList.remove('active');
            
            setTimeout(() => {
                initAdvancedAnimations();
            }, 100);
        });
        
        if (color.dataset.theme === currentTheme) {
            color.classList.add('active');
        }
    });
}

function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeRGB();
}

function updateThemeRGB() {
    const computedStyle = getComputedStyle(document.documentElement);
    const primary = computedStyle.getPropertyValue('--theme-primary').trim();
    const secondary = computedStyle.getPropertyValue('--theme-secondary').trim();
    const accent = computedStyle.getPropertyValue('--theme-accent').trim();
    
    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 10, g: 77, b: 104 };
    }
    
    const primaryRgb = hexToRgb(primary);
    const secondaryRgb = hexToRgb(secondary);
    const accentRgb = hexToRgb(accent);
    
    document.documentElement.style.setProperty('--theme-primary-rgb', `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}`);
    document.documentElement.style.setProperty('--theme-secondary-rgb', `${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}`);
    document.documentElement.style.setProperty('--theme-accent-rgb', `${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}`);
}

// ===== NAVIGATION =====
function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navLinks');
    const body = document.body;
    
    if (!mobileMenuBtn || !navMenu) return;
    
    mobileMenuBtn.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        this.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
        
        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav') && !event.target.closest('.mobile-menu-btn')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
        }
    });
}

// ===== ANIMATIONS =====
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                element.classList.add('visible');
                
                if (element.classList.contains('stat-item') || 
                    element.classList.contains('achievement')) {
                    animateCounter(element);
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.animate-fade-in, .animate-slide-in-left, .animate-slide-in-right, .animate-scale-in, .program-card, .faculty-card, .facility-card, .step, .direction-card, .value-card, .mv-card').forEach(el => {
        observer.observe(el);
    });
}

function animateCounter(element) {
    const numberElement = element.querySelector('.stat-number') || element.querySelector('.achievement-number');
    if (!numberElement) return;
    
    const target = parseInt(numberElement.dataset.count);
    if (isNaN(target)) return;
    
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const hasPlus = numberElement.textContent.includes('+');
    const hasPercent = numberElement.textContent.includes('%');
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            numberElement.textContent = target + (hasPlus ? '+' : '') + (hasPercent ? '%' : '');
            clearInterval(timer);
            
            element.style.boxShadow = '0 0 30px rgba(var(--theme-accent-rgb), 0.5)';
            setTimeout(() => {
                element.style.boxShadow = '';
            }, 1000);
        } else {
            numberElement.textContent = Math.floor(current);
        }
    }, 16);
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== FORM HANDLING =====
function initForms() {
    const inquiryForm = document.getElementById('inquiryForm');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    field.addEventListener('input', function() {
                        this.classList.remove('error');
                    }, { once: true });
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (!isValid) {
                showNotification('Please fill all required fields correctly.', 'error');
                return;
            }
            
            showNotification('Thank you for your inquiry! We will contact you within 24 hours.', 'success');
            this.reset();
        });
    }
    
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            if (!emailInput.value.trim()) {
                showNotification('Please enter your email address.', 'error');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            showNotification('Thank you for subscribing to our newsletter!', 'success');
            this.reset();
        });
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ===== MAPS =====
function initMaps() {
    setTimeout(() => {
        if (document.getElementById('campusMap')) {
            initCampusMap();
        }
        
        if (document.getElementById('contactMap')) {
            initContactMap();
        }
    }, 1000);
}

function initCampusMap() {
    const map = L.map('campusMap').setView([31.4475, 73.7065], 17);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    const buildings = [
        {
            name: "Main Academic Block",
            lat: 31.4478,
            lng: 73.7068,
            type: "academic",
            icon: "graduation-cap"
        },
        {
            name: "Science Complex",
            lat: 31.4472,
            lng: 73.7072,
            type: "academic",
            icon: "flask"
        },
        {
            name: "Central Library",
            lat: 31.4476,
            lng: 73.7062,
            type: "library",
            icon: "book"
        },
        {
            name: "Sports Complex",
            lat: 31.4468,
            lng: 73.7058,
            type: "sports",
            icon: "football-ball"
        },
        {
            name: "Student Hostels",
            lat: 31.4480,
            lng: 73.7055,
            type: "residential",
            icon: "home"
        },
        {
            name: "Administration Block",
            lat: 31.4474,
            lng: 73.7060,
            type: "administrative",
            icon: "building"
        }
    ];
    
    buildings.forEach(building => {
        const icon = L.divIcon({
            className: 'map-marker',
            html: `<i class="fas fa-${building.icon}"></i>`,
            iconSize: [40, 40],
            iconAnchor: [20, 40]
        });
        
        const marker = L.marker([building.lat, building.lng], { icon })
            .addTo(map)
            .bindPopup(`<strong>${building.name}</strong><br>Click for more details`);
    });
    
    const bounds = L.latLngBounds(buildings.map(b => [b.lat, b.lng]));
    map.fitBounds(bounds, { padding: [50, 50] });
}

function initContactMap() {
    const map = L.map('contactMap').setView([31.4475, 73.7065], 15);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    const icon = L.divIcon({
        className: 'map-marker',
        html: '<i class="fas fa-map-marker-alt"></i>',
        iconSize: [50, 50],
        iconAnchor: [25, 50]
    });
    
    L.marker([31.4475, 73.7065], { icon })
        .addTo(map)
        .bindPopup('<strong>Aspire Colleges Narrowal</strong><br>College Road, Near Narrowal Bypass')
        .openPopup();
}

// ===== ACCESSIBILITY =====
function initAccessibility() {
    const skipLink = document.createElement('a');
    skipLink.href = '#mainContent';
    skipLink.className = 'sr-only';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
        mainContent.setAttribute('tabindex', '-1');
        mainContent.setAttribute('role', 'main');
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all systems
    initThemeSelector();
    initNavigation();
    initBackToTop();
    initForms();
    initMaps();
    initAccessibility();
    initAnimations();
    
    // Show loading animation for 2 seconds
    const pageTransition = document.getElementById('pageTransition');
    if (pageTransition) {
        setTimeout(() => {
            pageTransition.classList.add('hidden');
            setTimeout(() => {
                pageTransition.style.display = 'none';
                initAdvancedAnimations();
            }, 500);
        }, 2000);
    } else {
        initAdvancedAnimations();
    }
    
    // Add error styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        .error {
            border-color: #ef4444 !important;
            background-color: rgba(239, 68, 68, 0.05) !important;
            animation: shake 0.5s ease-in-out;
        }
        
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--theme-primary);
            color: white;
            padding: 15px 20px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-heavy);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-width: 300px;
            max-width: 400px;
            transform: translateX(120%);
            transition: transform 0.6s ease;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification-success {
            background: #10b981;
        }
        
        .notification-error {
            background: #ef4444;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-grow: 1;
        }
        
        .notification-close {
            background: transparent;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 1rem;
            margin-left: 15px;
            padding: 5px;
            border-radius: var(--border-radius);
            transition: all 0.6s ease;
        }
        
        .notification-close:hover {
            background-color: rgba(255, 255, 255, 0.1);
            transform: rotate(90deg);
        }
        
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
        
        .map-marker {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: var(--theme-primary);
            color: white;
            border-radius: 50%;
            font-size: 1.2rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            border: 3px solid white;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .map-marker:hover {
            transform: scale(1.2);
            background: var(--theme-accent);
        }
    `;
    document.head.appendChild(style);
});

// ===== PERFORMANCE OPTIMIZATION =====
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        // Handle scroll-related operations
    }, 100);
});

let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        initAdvancedAnimations();
    }, 250);
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('Error occurred:', e.error);
});



// Faculty page counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current > target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 20);
    });
}

// Initialize when faculty page is loaded
if (window.location.pathname.includes('faculty.html')) {
    // Observe when stats section comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    });
    
    const statsSection = document.querySelector('.faculty-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}





// Admissions Page Specific Functionality
if (window.location.pathname.includes('admissions.html')) {
    // FAQ Toggle Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            item.classList.toggle('active');
        });
    });
    
    // Admission Form Submission
    const admissionForm = document.getElementById('admissionForm');
    if (admissionForm) {
        admissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                fullName: this.fullName.value,
                fatherName: this.fatherName.value,
                cnic: this.cnic.value,
                phone: this.phone.value,
                email: this.email.value,
                program: this.program.value,
                address: this.address.value,
                previousEducation: this.previousEducation.value,
                terms: this.terms.checked
            };
            
            // Simple validation
            if (!formData.terms) {
                alert('Please agree to the terms and conditions.');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For demo purposes, we'll just show a success message
            alert('Thank you for your application! We will contact you soon for further process.\nApplication ID: ASP' + Math.floor(Math.random() * 10000));
            
            // Reset form
            this.reset();
        });
    }
    
    // Fee table highlight on hover
    const feeTableRows = document.querySelectorAll('.fee-table tbody tr');
    feeTableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'var(--light-bg)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
}






// Contact Page Specific Functionality
if (window.location.pathname.includes('contact.html')) {
    // Inquiry Form Submission
    const inquiryForm = document.getElementById('inquiryForm');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: this.contactName.value,
                email: this.contactEmail.value,
                phone: this.contactPhone.value,
                subject: this.contactSubject.value,
                message: this.contactMessage.value,
                newsletter: this.newsletter.checked
            };
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <div style="background: #d4edda; color: #155724; padding: 15px; border-radius: var(--border-radius); margin-top: 20px; border: 1px solid #c3e6cb;">
                    <h4 style="color: #155724; margin-bottom: 10px;"><i class="fas fa-check-circle"></i> Message Sent Successfully!</h4>
                    <p style="margin: 0;">Thank you for contacting us, ${formData.name}. We will get back to you within 24 hours.</p>
                </div>
            `;
            
            // Insert success message after form
            this.parentNode.insertBefore(successMessage, this.nextSibling);
            
            // Reset form
            this.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }
    
    // Phone number formatting
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 4) {
                    value = value;
                } else if (value.length <= 7) {
                    value = value.slice(0, 4) + '-' + value.slice(4);
                } else {
                    value = value.slice(0, 4) + '-' + value.slice(4, 7) + '-' + value.slice(7, 11);
                }
            }
            this.value = value;
        });
    });
    
    // Copy email addresses on click
    const emailLinks = document.querySelectorAll('.email-addresses a');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.textContent;
            navigator.clipboard.writeText(email).then(() => {
                // Show copied notification
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Copied!';
                this.style.color = '#28a745';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.color = '';
                }, 2000);
            });
        });
    });
    
    // Animate contact cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all animated elements on contact page
    const animatedElements = document.querySelectorAll('.animate-fade-in');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
    
    // Smooth scroll for contact links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}









// Programs Page Specific Functionality
if (window.location.pathname.includes('programs.html')) {
    // Curriculum Tab Switching
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding tab pane
            const tabId = button.getAttribute('data-tab');
            const tabPane = document.getElementById(`curriculum-${tabId}`);
            if (tabPane) {
                tabPane.classList.add('active');
            }
        });
    });
    
    // Smooth scroll to programs
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                    
                    // If it's a program card, add highlight effect
                    if (href.startsWith('#pre-') || href.startsWith('#computer-')) {
                        targetElement.style.boxShadow = '0 0 0 3px var(--theme-primary)';
                        setTimeout(() => {
                            targetElement.style.boxShadow = '';
                        }, 2000);
                    }
                }
            }
        });
    });
    
    // Download syllabus functionality (demo)
    document.querySelectorAll('a[href^="#curriculum-"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const programName = this.closest('.program-detail-card')
                .querySelector('.program-title h3').textContent;
            
            // In a real application, this would download a PDF file
            alert(`Downloading syllabus for ${programName}\n\nThis would download a PDF file in a real application.`);
            
            // Simulate download
            const downloadLink = document.createElement('a');
            downloadLink.href = '#';
            downloadLink.download = `${programName.toLowerCase().replace(/\s+/g, '-')}-syllabus.pdf`;
            downloadLink.click();
        });
    });
    
    // Animate program cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add stagger effect for delayed animations
                if (entry.target.classList.contains('delay-1')) {
                    entry.target.style.transitionDelay = '0.2s';
                } else if (entry.target.classList.contains('delay-2')) {
                    entry.target.style.transitionDelay = '0.4s';
                }
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-fade-in');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Program card hover effects
    const programCards = document.querySelectorAll('.program-detail-card');
    programCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
        });
    });
    
    // Feature cards animation
    const featureCards = document.querySelectorAll('.feature');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}











// Revolution Slider Functionality
let slideIndex = 1;
let slideInterval;

function initSlider() {
    const slides = document.querySelectorAll('.rs-slide');
    const dots = document.querySelectorAll('.dot');
    
    // Show first slide
    showSlides(slideIndex);
    
    // Auto slide every 6 seconds
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 6000);
    
    // Pause on hover
    const sliderContainer = document.querySelector('.revolution-slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        sliderContainer.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                plusSlides(1);
            }, 6000);
        });
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function prevSlide() {
    plusSlides(-1);
}

function nextSlide() {
    plusSlides(1);
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll('.rs-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        slides[i].style.opacity = '0';
    }
    
    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    // Show current slide
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add('active');
        slides[slideIndex - 1].style.opacity = '1';
        dots[slideIndex - 1].classList.add('active');
    }
    
    // Reset timer
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 6000);
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initSlider();
    
    // Add animation to slider
    const slider = document.querySelector('.revolution-slider-container');
    if (slider) {
        slider.classList.add('animate-fade-in');
    }
});






// Main JavaScript file for Aspire Colleges Website

// Theme Management
document.addEventListener('DOMContentLoaded', function() {
    // Theme selector functionality
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeSelector = document.getElementById('themeSelector');
    const themeColors = document.querySelectorAll('.theme-color');
    
    if (themeToggleBtn && themeSelector) {
        themeToggleBtn.addEventListener('click', function() {
            themeSelector.classList.toggle('show');
        });
        
        // Close theme selector when clicking outside
        document.addEventListener('click', function(event) {
            if (!themeToggleBtn.contains(event.target) && !themeSelector.contains(event.target)) {
                themeSelector.classList.remove('show');
            }
        });
    }
    
    // Theme selection
    themeColors.forEach(color => {
        color.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            setTheme(theme);
        });
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'default';
    setTheme(savedTheme);
    
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navLinks && navLinks.classList.contains('show')) {
            if (!navLinks.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                navLinks.classList.remove('show');
            }
        }
    });
    
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Form submission
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission
            alert('Form submitted successfully!');
        });
    });
});

// Set theme function
function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update theme selector active state
    const themeColors = document.querySelectorAll('.theme-color');
    themeColors.forEach(color => {
        color.classList.remove('active');
        if (color.getAttribute('data-theme') === theme) {
            color.classList.add('active');
        }
    });
}

// Animation functions
function initAdvancedAnimations() {
    // Animate counting numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, 20);
    });
}

// Initialize animations on scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe elements to animate
    document.querySelectorAll('.animate-fade-in, .animate-slide-in-left, .animate-slide-in-right').forEach(el => {
        observer.observe(el);
    });
}

// Export functions for use in HTML
window.initAdvancedAnimations = initAdvancedAnimations;
window.initAnimations = initAnimations;
window.setTheme = setTheme;





















/* ===== 30-SECOND WEBSITE LIMITER SYSTEM ===== */
function initWebsiteLimiter() {
    const limiter = document.getElementById('websiteLimiter');
    const timeRemaining = document.getElementById('timeRemaining');
    const countdownText = document.getElementById('countdownText');
    const secondsUsed = document.getElementById('secondsUsed');
    const timePercentage = document.getElementById('timePercentage');
    const sessionNumber = document.getElementById('sessionNumber');
    const finalWarning = document.getElementById('finalWarning');
    const finalCountdown = document.getElementById('finalCountdown');
    
    // Buttons
    const extend5Sec = document.getElementById('extend5Sec');
    const extend10Sec = document.getElementById('extend10Sec');
    const restartTimer = document.getElementById('restartTimer');
    const panicExtend = document.getElementById('panicExtend');
    const closeNowBtn = document.getElementById('closeNow');
    const timerSpeed = document.getElementById('timerSpeed');
    
    if (!limiter) return;
    
    // Constants
    const TOTAL_TIME = 30 * 1000; // 30 seconds in milliseconds
    const CIRCUMFERENCE = 565.48; // 2 * π * r
    const FINAL_WARNING_TIME = 10 * 1000; // Show warning at 10 seconds
    
    // Variables
    let timeLeft = TOTAL_TIME;
    let timerInterval;
    let sessionCount = parseInt(localStorage.getItem('websiteSessionCount')) || 1;
    let timerMultiplier = 1; // 1x normal speed
    let totalTimeUsed = 0;
    let isFinalWarningShown = false;
    
    // Initialize
    sessionNumber.textContent = sessionCount;
    updateDisplay();
    
    // Start timer immediately
    function startTimer() {
        // Show limiter overlay
        limiter.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.style.pointerEvents = 'none'; // Disable interactions
        
        // Reset time
        timeLeft = TOTAL_TIME;
        totalTimeUsed = 0;
        isFinalWarningShown = false;
        updateDisplay();
        updateProgressCircle();
        
        // Hide final warning
        finalWarning.classList.remove('active');
        
        // Start countdown with selected speed
        clearInterval(timerInterval);
        timerInterval = setInterval(updateTimer, 1000 / timerMultiplier);
        
        // Play sound effect
        playTimerSound();
    }
    
    // Update timer
    function updateTimer() {
        const timeStep = 1000 * timerMultiplier;
        timeLeft -= timeStep;
        totalTimeUsed += timeStep;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            closeWebsite();
            return;
        }
        
        // Show final warning at 10 seconds
        if (timeLeft <= FINAL_WARNING_TIME && !isFinalWarningShown) {
            showFinalWarning();
        }
        
        updateDisplay();
        updateProgressCircle();
        
        // Play tick sound every second
        if (Math.floor(timeLeft / 1000) !== Math.floor((timeLeft + timeStep) / 1000)) {
            playTickSound();
        }
    }
    
    // Update display
    function updateDisplay() {
        const seconds = Math.ceil(timeLeft / 1000);
        const totalSecondsUsed = Math.floor(totalTimeUsed / 1000);
        const percentage = Math.round((timeLeft / TOTAL_TIME) * 100);
        
        // Format time
        timeRemaining.textContent = `00:${seconds.toString().padStart(2, '0')}`;
        countdownText.textContent = `${seconds} second${seconds !== 1 ? 's' : ''}`;
        secondsUsed.textContent = totalSecondsUsed;
        timePercentage.textContent = `${percentage}%`;
        
        // Update colors based on time left
        if (seconds <= 5) {
            timeRemaining.style.color = '#FF0000';
            timeRemaining.style.animation = 'timeTremble 0.05s infinite';
        } else if (seconds <= 15) {
            timeRemaining.style.color = '#FF6B6B';
            timeRemaining.style.animation = 'timeTremble 0.1s infinite';
        } else {
            timeRemaining.style.color = '#FFD166';
            timeRemaining.style.animation = 'timeTremble 0.15s infinite';
        }
        
        // Update final countdown
        if (finalCountdown) {
            finalCountdown.textContent = seconds;
        }
    }
    
    // Update progress circle
    function updateProgressCircle() {
        const progress = timeLeft / TOTAL_TIME;
        const offset = CIRCUMFERENCE - (progress * CIRCUMFERENCE);
        const progressCircle = document.querySelector('.timer-circle-progress');
        
        if (progressCircle) {
            progressCircle.style.strokeDashoffset = offset;
            
            // Change color based on time
            if (timeLeft <= 5000) {
                progressCircle.style.stroke = '#FF0000';
            } else if (timeLeft <= 15000) {
                progressCircle.style.stroke = '#FF6B6B';
            } else {
                progressCircle.style.stroke = '#FFD166';
            }
        }
    }
    
    // Show final warning
    function showFinalWarning() {
        finalWarning.classList.add('active');
        isFinalWarningShown = true;
        playWarningSound();
    }
    
    // Extend time
    function extendTime(seconds) {
        timeLeft += seconds * 1000;
        
        // Cap at maximum 60 seconds
        if (timeLeft > 60000) {
            timeLeft = 60000;
            showNotification('Maximum time reached (60 seconds)');
        } else {
            showNotification(`+${seconds} seconds added!`);
        }
        
        // Hide warning if we extended past 10 seconds
        if (timeLeft > FINAL_WARNING_TIME && finalWarning.classList.contains('active')) {
            finalWarning.classList.remove('active');
            isFinalWarningShown = false;
        }
        
        updateDisplay();
        updateProgressCircle();
        playExtendSound();
    }
    
    // Restart timer
    function restartTimerFunc() {
        clearInterval(timerInterval);
        sessionCount++;
        localStorage.setItem('websiteSessionCount', sessionCount);
        sessionNumber.textContent = sessionCount;
        startTimer();
        showNotification('Timer restarted! 30 seconds remaining');
        playRestartSound();
    }
    
    // Close website
    function closeWebsite() {
        // Play closing sound
        playCloseSound();
        
        // Show closing animation
        limiter.style.transition = 'all 0.5s ease';
        limiter.style.opacity = '0';
        limiter.style.transform = 'scale(1.5)';
        
        setTimeout(() => {
            // Show closing screen
            document.body.innerHTML = `
                <div style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background: linear-gradient(135deg, #b40808, #dfad3e);
                    color: white;
                    text-align: center;
                    padding: 20px;
                    font-family: 'Montserrat', sans-serif;
                ">
                    <div>
                        <div style="font-size: 8rem; margin-bottom: 20px;">
                            <i class="fas fa-hourglass-end"></i>
                        </div>
                        <h1 style="font-size: 3.5rem; margin-bottom: 20px; text-transform: uppercase;">
                            Time's Up!
                        </h1>
                        <p style="font-size: 1.8rem; margin-bottom: 30px; opacity: 0.9;">
                            Your 30-second preview has ended
                        </p>
                        <div style="
                            background: rgba(255, 255, 255, 0.1);
                            padding: 25px;
                            border-radius: 20px;
                            margin: 30px auto;
                            max-width: 500px;
                        ">
                            <p style="font-size: 1.3rem; margin-bottom: 15px;">
                                <i class="fas fa-chart-bar"></i>
                                Session Stats:
                            </p>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 20px;">
                                <div>
                                    <div style="font-size: 2.5rem; font-weight: 900; color: #FFD166;">
                                        ${sessionCount}
                                    </div>
                                    <div style="font-size: 0.9rem; opacity: 0.7;">Total Sessions</div>
                                </div>
                                <div>
                                    <div style="font-size: 2.5rem; font-weight: 900; color: #4ECDC4;">
                                        30s
                                    </div>
                                    <div style="font-size: 0.9rem; opacity: 0.7;">Per Session</div>
                                </div>
                            </div>
                        </div>
                        <button onclick="location.reload()" style="
                            margin-top: 30px;
                            padding: 20px 50px;
                            background: linear-gradient(135deg, #FFD166, #FB5607);
                            color: white;
                            border: none;
                            border-radius: 50px;
                            font-size: 1.4rem;
                            font-weight: 900;
                            cursor: pointer;
                            display: inline-flex;
                            align-items: center;
                            gap: 15px;
                            text-transform: uppercase;
                            letter-spacing: 2px;
                            transition: all 0.3s ease;
                        " onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 15px 40px rgba(255, 209, 102, 0.4)'"
                        onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                            <i class="fas fa-play-circle"></i>
                            Start New 30-Second Session
                        </button>
                        <p style="margin-top: 40px; font-size: 1.1rem; opacity: 0.6;">
                            Complete website coming soon - InshAllah
                        </p>
                    </div>
                </div>
            `;
            
            // Add font awesome
            const faScript = document.createElement('script');
            faScript.src = 'https://kit.fontawesome.com/a076d05399.js';
            faScript.crossOrigin = 'anonymous';
            document.head.appendChild(faScript);
            
            // Add Montserrat font
            const fontLink = document.createElement('link');
            fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap';
            fontLink.rel = 'stylesheet';
            document.head.appendChild(fontLink);
            
        }, 500);
    }
    
    // Sound functions
    function playTimerSound() {
        // Play start sound
        try {
            const audio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQ=');
            audio.volume = 0.3;
            audio.play();
        } catch (e) {
            console.log('Audio not supported');
        }
    }
    
    function playTickSound() {
        // Play tick sound
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }
    
    function playWarningSound() {
        // Play warning sound
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                    
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.3);
                }, i * 300);
            }
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }
    
    function playExtendSound() {
        // Play positive sound
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
            
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }
    
    function playRestartSound() {
        // Play restart sound
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(392.00, audioContext.currentTime); // G4
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime + 0.1); // C5
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.2); // E5
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.3); // G5
            
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.4);
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }
    
    function playCloseSound() {
        // Play closing sound
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime); // G5
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime + 0.1); // C5
            oscillator.frequency.setValueAtTime(392.00, audioContext.currentTime + 0.2); // G4
            oscillator.frequency.setValueAtTime(261.63, audioContext.currentTime + 0.3); // C4
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.4);
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }
    
    // Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'time-notification';
        notification.innerHTML = `
            <i class="fas fa-bell"></i>
            <span>${message}</span>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #06D6A0, #4ECDC4);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 999999;
            animation: notificationSlide 0.3s ease;
            box-shadow: 0 10px 25px rgba(6, 214, 160, 0.4);
            font-weight: 600;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'notificationSlideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
    
    // Event Listeners
    if (extend5Sec) {
        extend5Sec.addEventListener('click', () => extendTime(5));
    }
    
    if (extend10Sec) {
        extend10Sec.addEventListener('click', () => extendTime(10));
    }
    
    if (restartTimer) {
        restartTimer.addEventListener('click', restartTimerFunc);
    }
    
    if (panicExtend) {
        panicExtend.addEventListener('click', () => extendTime(15));
    }
    
    if (closeNowBtn) {
        closeNowBtn.addEventListener('click', closeWebsite);
    }
    
    if (timerSpeed) {
        timerSpeed.addEventListener('change', function() {
            switch (this.value) {
                case 'fast':
                    timerMultiplier = 2;
                    break;
                case 'slow':
                    timerMultiplier = 0.5;
                    break;
                default:
                    timerMultiplier = 1;
            }
            showNotification(`Timer speed: ${this.value}`);
        });
    }
    
    // Add notification animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes notificationSlide {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes notificationSlideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Start the 30-second timer immediately
    setTimeout(startTimer, 100); // Small delay to ensure DOM is ready
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initWebsiteLimiter);