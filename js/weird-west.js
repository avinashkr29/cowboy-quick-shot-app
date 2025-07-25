// Weird West Interactive Effects

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroSection) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });

    // Supernatural glow animation intensity based on scroll
    const supernaturalGlow = document.querySelector('.supernatural-glow');
    const supernaturalAura = document.querySelector('.supernatural-aura');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const opacity = Math.max(0.3, 1 - scrolled / 1000);
        
        if (supernaturalGlow) {
            supernaturalGlow.style.opacity = opacity;
        }
        
        if (supernaturalAura) {
            supernaturalAura.style.opacity = opacity;
        }
    });

    // Random rotation for feature cards on hover
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const randomRotation = (Math.random() - 0.5) * 6; // -3 to 3 degrees
            this.style.transform = `rotate(${randomRotation}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            const isEven = Array.from(featureCards).indexOf(this) % 2 === 1;
            const baseRotation = isEven ? '1deg' : '-1deg';
            this.style.transform = `rotate(${baseRotation})`;
        });
    });

    // Performance card supernatural effects
    const performanceCards = document.querySelectorAll('.performance-card');
    performanceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const randomRotation = (Math.random() - 0.5) * 4; // -2 to 2 degrees
            this.style.transform = `translateY(-10px) rotate(${randomRotation}deg)`;
            
            // Add temporary glow effect
            this.style.boxShadow = `0 15px 40px rgba(230, 188, 8, 0.4), 0 0 20px rgba(230, 188, 8, 0.2)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
            this.style.boxShadow = '';
        });
    });

    // Gunslinger silhouette interactive effects
    const gunslingerSilhouette = document.querySelector('.gunslinger-silhouette');
    if (gunslingerSilhouette) {
        gunslingerSilhouette.addEventListener('mouseenter', function() {
            this.style.filter = 'drop-shadow(0 0 30px rgba(230, 188, 8, 0.7)) hue-rotate(10deg)';
        });
        
        gunslingerSilhouette.addEventListener('mouseleave', function() {
            this.style.filter = 'drop-shadow(0 0 20px rgba(230, 188, 8, 0.3))';
        });
    }

    // Download cowboy interactive effects
    const cowboyDownload = document.querySelector('.cowboy-download');
    if (cowboyDownload) {
        cowboyDownload.addEventListener('mouseenter', function() {
            this.style.filter = 'drop-shadow(0 0 30px rgba(230, 188, 8, 0.7)) hue-rotate(10deg)';
        });
        
        cowboyDownload.addEventListener('mouseleave', function() {
            this.style.filter = 'drop-shadow(0 0 20px rgba(230, 188, 8, 0.3))';
        });
    }

    // Button supernatural effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            // Add supernatural crackle effect
            this.style.textShadow = '0 0 10px rgba(230, 188, 8, 0.8)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.textShadow = '';
        });
    });

    // Back to Top Button (React Bits Inspired)
    const backToTopBtn = document.getElementById('back-to-top');
    const notificationContainer = document.getElementById('notification-container');
    
    const cowboyMessages = [
        '🤠 Yeehaw! Back to the top, partner!',
        '🐎 Saddle up, we\'re ridin\' to the top!',
        '⭐ This town ain\'t big enough for scrollin\'!',
        '🌵 Head \'em up, move \'em out!',
        '🔫 Draw, partner! To the top we go!',
        '🏜️ Desert winds carry us upward!',
        '🚂 All aboard the express to the top!',
        '🎯 Bullseye! Right back to the start!',
        '🦅 Soarin\' like an eagle, partner!',
        '⚡ Faster than a tumbleweed!',
        '🌟 Ridin\' off into the sunset... upward!',
        '🎪 Welcome back to the wild west show!'
    ];

    function getRandomMessage() {
        return cowboyMessages[Math.floor(Math.random() * cowboyMessages.length)];
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cowboy-notification';
        notification.textContent = message;
        notificationContainer.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showNotification(getRandomMessage());
    }

    // Show/hide back to top button
    window.addEventListener('scroll', () => {
        const visible = window.scrollY > 500;
        backToTopBtn.classList.toggle('visible', visible);
    });

    // Back to top button click
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', scrollToTop);
    }

    // Enhanced typing effect for hero title (supernatural reveal)
    const heroTitle = document.querySelector('.hero-main');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.classList.add('typing');
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                heroTitle.classList.remove('typing');
            }
        };
        
        // Start typing effect after a brief delay
        setTimeout(typeWriter, 1000);
    }

    // Cursor trail effect (supernatural)
    let trail = [];
    const maxTrail = 10;
    
    document.addEventListener('mousemove', function(e) {
        trail.push({
            x: e.clientX,
            y: e.clientY,
            life: maxTrail
        });
        
        if (trail.length > maxTrail) {
            trail.shift();
        }
    });

    // Create canvas for supernatural effects
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Animate supernatural cursor trail
    function animateTrail() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < trail.length; i++) {
            const point = trail[i];
            const opacity = point.life / maxTrail;
            
            ctx.beginPath();
            ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
            ctx.fillStyle = `rgba(230, 188, 8, ${opacity * 0.3})`;
            ctx.fill();
            
            point.life--;
            if (point.life <= 0) {
                trail.splice(i, 1);
                i--;
            }
        }
        
        requestAnimationFrame(animateTrail);
    }
    
    animateTrail();

    // Enhanced Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        // Add different animation delays for staggered effect
        const delay = index * 0.1;
        section.style.transitionDelay = `${delay}s`;
        section.classList.add('scroll-reveal');
        observer.observe(section);
    });

    // Observe feature cards for individual animations
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        const delay = index * 0.1;
        card.style.transitionDelay = `${delay}s`;
        card.classList.add('scroll-reveal');
        observer.observe(card);
    });

    // Observe performance cards for individual animations
    const performanceCards = document.querySelectorAll('.performance-card');
    performanceCards.forEach((card, index) => {
        const delay = index * 0.1;
        card.style.transitionDelay = `${delay}s`;
        card.classList.add('scroll-reveal');
        observer.observe(card);
    });

    // Enhanced button interactions
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 15px rgba(230, 188, 8, 0.8)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.textShadow = '';
        });
        
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Disable right-click context menu for supernatural effect
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    
    // Create supernatural flash effect
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = '0';
    flash.style.left = '0';
    flash.style.width = '100%';
    flash.style.height = '100%';
    flash.style.background = 'rgba(230, 188, 8, 0.1)';
    flash.style.pointerEvents = 'none';
    flash.style.zIndex = '99999';
    document.body.appendChild(flash);
    
    setTimeout(() => {
        flash.remove();
    }, 100);
});

// Keyboard shortcuts for supernatural navigation
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                document.querySelector('.hero')?.scrollIntoView({ behavior: 'smooth' });
                break;
            case '2':
                e.preventDefault();
                document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
                break;
            case '3':
                e.preventDefault();
                document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' });
                break;
        }
    }
});

// Add supernatural sound effects (if audio files are available)
function playSupernaturalSound(soundType) {
    // This would play supernatural sound effects
    // Implementation would require audio files
    console.log(`Playing supernatural sound: ${soundType}`);
}

// Add supernatural visual effects on page load
window.addEventListener('load', function() {
    // Flash effect on page load
    const loadFlash = document.createElement('div');
    loadFlash.style.position = 'fixed';
    loadFlash.style.top = '0';
    loadFlash.style.left = '0';
    loadFlash.style.width = '100%';
    loadFlash.style.height = '100%';
    loadFlash.style.background = 'linear-gradient(45deg, rgba(230, 188, 8, 0.2), rgba(0, 0, 0, 0.5))';
    loadFlash.style.pointerEvents = 'none';
    loadFlash.style.zIndex = '99999';
    loadFlash.style.opacity = '1';
    loadFlash.style.transition = 'opacity 2s ease';
    document.body.appendChild(loadFlash);
    
    setTimeout(() => {
        loadFlash.style.opacity = '0';
        setTimeout(() => {
            loadFlash.remove();
        }, 2000);
    }, 500);
});