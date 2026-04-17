// ==============================
// ====== UTILITY FUNCTIONS ======
// ==============================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==============================
// ====== LOADED CLASS HANDLER ===
// ==============================
function addLoadedClass() {
    document.body.classList.add('loaded');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(addLoadedClass, 100));
} else {
    setTimeout(addLoadedClass, 100);
}

// ==============================
// ====== NAVIGATION =============
// ==============================
// ==============================
// ====== NAVIGATION =============
// ==============================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('nav-menu');
    const navHamburger = document.getElementById('nav-hamburger');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    // ----- Overlay for mobile menu -----
    const overlay = document.createElement('div');
    overlay.id = 'menu-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.3)';
    overlay.style.zIndex = '999'; // below menu
    overlay.style.pointerEvents = 'none';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s ease';
    document.body.appendChild(overlay);

    function toggleMenu(active) {
        navHamburger.classList.toggle('active', active);
        navMenu.classList.toggle('active', active);
        document.body.style.overflow = active ? 'hidden' : 'auto';
        document.documentElement.style.overflow = active ? 'hidden' : 'auto';
        overlay.style.pointerEvents = active ? 'auto' : 'none';
        overlay.style.opacity = active ? '1' : '0';
    }

    // ----- Hamburger click -----
    navHamburger.addEventListener('click', () => {
        toggleMenu(!navMenu.classList.contains('active'));
    });

    // ----- Close mobile menu when clicking nav links -----
    navLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // ----- Close mobile menu when clicking overlay -----
    overlay.addEventListener('click', () => toggleMenu(false));

    // ----- Keyboard navigation support (Escape key) -----
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            toggleMenu(false);
        }
    });

    // ----- Scroll to top button -----
    scrollToTopBtn.addEventListener('click', () => smoothScrollTo('body', 100));

    // ----- Sticky Navbar & Scroll-to-top -----
    let lastScrollY = window.scrollY;
    function handleScroll() {
        const currentScrollY = window.scrollY;
        navbar.style.background = currentScrollY > 100 ? 'rgba(0, 0, 0, 0.98)' : 'rgba(0, 0, 0, 0.95)';
        navbar.style.backdropFilter = currentScrollY > 100 ? 'blur(15px)' : 'blur(10px)';
        scrollToTopBtn.classList.toggle('show', currentScrollY > 300);
        lastScrollY = currentScrollY;
    }
    window.addEventListener('scroll', handleScroll);
}


// SMOOTH SCROLLING
function smoothScrollTo(target, duration = 500) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    const targetPosition = targetElement.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// PARALLAX EFFECTS 
// parallax-1
function initParallaxEffects() {
    // Existing parallax section
    const parallaxSection = document.querySelector('.parallax-section');
    const parallaxColumns = document.querySelectorAll('.parallax-column');
    
    // Process section
    const processSection = document.querySelector('.process-section');
    const processSteps = document.querySelectorAll('.process-step');
    
    // Initial offsets for parallax section
    const parallaxOffsets = [0, 150, 300];
    
    // Initial offsets for process section
    const processOffsets = [0, 100, 150, 300];
    
    function updateParallax() {
        // Update parallax section
        if (parallaxSection && parallaxColumns.length > 0) {
            const sectionRect = parallaxSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Start animating when section top hits bottom of viewport
            const start = windowHeight;           
            const end = windowHeight * 0.2;      
            const current = sectionRect.top;

            const scrollProgress = Math.max(0, Math.min(1,
                (start - current) / (start - end)
            ));

            parallaxColumns.forEach((column, index) => {
                const initialOffset = parallaxOffsets[index]; // [0, 150, 300]
                const newOffset = initialOffset * (1 - scrollProgress);
                column.style.transform = `translateY(${newOffset}px)`;
            });
        }
        
        // Update process section
        if (processSection && processSteps.length > 0) {
            const sectionRect = processSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const start = windowHeight * 0.5;   
            const end = -windowHeight * 0.255;   
            const current = sectionRect.top;

            const scrollProgress = Math.max(0, Math.min(1,
                (start - current) / (start - end)
            ));

            processSteps.forEach((step, index) => {
                const initialOffset = processOffsets[index];
                const newOffset = initialOffset * (1 - scrollProgress);
                step.style.transform = `translateY(${newOffset}px)`;
            });
        }
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateParallax);
    // Initial call
    updateParallax();
}

// reading section
class ReadingsSlider {
    constructor() {
        this.slider = document.getElementById('sliderContainer');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.cards = document.querySelectorAll('.reading-card');
        
        this.currentIndex = 0;
        this.cardsToShow = this.getCardsToShow();
        this.maxIndex = Math.max(0, this.cards.length - this.cardsToShow);
        
        this.init();
    }

    getCardsToShow() {
        if (window.innerWidth <= 768) {
            return 1; // Mobile: 1 card
        } else if (window.innerWidth <= 1024) {
            return 2; // Tablet: 2 cards
        } else {
            return 3; // Desktop: 3 cards
        }
    }

    init() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Touch/swipe support
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        this.slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        this.slider.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });

        this.slider.addEventListener('touchend', () => {
            if (!isDragging) return;
            
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
            isDragging = false;
        });

        // Mouse drag support for desktop
        this.slider.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            isDragging = true;
            this.slider.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            currentX = e.clientX;
        });

        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
            isDragging = false;
            this.slider.style.cursor = 'grab';
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            this.cardsToShow = this.getCardsToShow();
            this.maxIndex = Math.max(0, this.cards.length - this.cardsToShow);
            this.currentIndex = Math.min(this.currentIndex, this.maxIndex);
            this.updateSlider();
        });

        this.updateButtons();
    }

    nextSlide() {
        if (this.currentIndex < this.maxIndex) {
            this.currentIndex++;
            this.updateSlider();
        }
    }

    prevSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateSlider();
        }
    }

    updateSlider() {
        const containerWidth = this.slider.parentElement.offsetWidth;
        const totalGap = this.cardsToShow > 1 ? (this.cardsToShow - 1) * 32 : 0; // 2rem = 32px
        const cardWidth = (containerWidth - totalGap) / this.cardsToShow;
        const slideDistance = cardWidth * this.cardsToShow + totalGap;
        const offset = -(this.currentIndex * slideDistance);
        
        this.slider.style.transform = `translateX(${offset}px)`;
        this.updateButtons();
    }

    updateButtons() {
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex >= this.maxIndex;
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initParallaxEffects(); // Initialize both parallax effects
    new ReadingsSlider();  // Initialize slider
});

//HOVER CARDS - keeping this just incase 
function initHoverCards() {
    const gridItems = document.querySelectorAll('.grid-item');
    let currentCard = null;
    let isMobile = window.innerWidth <= 768;

    window.addEventListener('resize', () => isMobile = window.innerWidth <= 768);

    gridItems.forEach(item => {
        const cardId = 'card-' + item.dataset.card;
        const card = document.getElementById(cardId);

        // Desktop hover
        item.addEventListener('mouseenter', () => {
            if (isMobile) return;
            if (currentCard && currentCard !== card) hideCardInstantly(currentCard);
            positionCard(card, item);
            requestAnimationFrame(() => card.classList.add('show'));
            currentCard = card;
        });

        item.addEventListener('mouseleave', () => {
            if (isMobile) return;
            if (card) card.classList.remove('show');
            if (currentCard === card) currentCard = null;
        });

        // Mobile touch
        item.addEventListener('click', e => {
            if (!isMobile) return;
            e.preventDefault();
            if (currentCard === card) hideCardInstantly(card);
            else {
                if (currentCard) hideCardInstantly(currentCard);
                positionCard(card, item);
                requestAnimationFrame(() => card.classList.add('show'));
                currentCard = card;
            }
        });
    });

    // Hide on outside click
    document.addEventListener('click', e => {
        if (!isMobile || !currentCard) return;
        if (!e.target.closest('.grid-item') && !e.target.closest('.hover-card')) {
            hideCardInstantly(currentCard);
            currentCard = null;
        }
    });
}

function positionCard(card, item) { /* ...same as before... */ }
function hideCardInstantly(card) { /* ...same as before... */ }


//SCROLL ANIMATIONS
function initScrollAnimations() { 
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }; 
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; } }); }, observerOptions); const animateElements = document.querySelectorAll('.service-card, .project-card, .about-content'); animateElements.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(30px)'; el.style.transition = 'all 0.6s ease'; observer.observe(el); });
 }


// CONTACT FORM 
function initContactForm() { 
    const contactForm = document.getElementById('contact-form'); if (!contactForm) return; contactForm.addEventListener('submit', e => { e.preventDefault(); const formData = new FormData(contactForm); const name = formData.get('name'); const email = formData.get('email'); const message = formData.get('message'); if (!name || !email || !message) { alert('Please fill in all fields.'); return; } const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; if (!emailRegex.test(email)) { alert('Please enter a valid email address.'); return; } const submitBtn = contactForm.querySelector('.form-submit'); const originalText = submitBtn.textContent; submitBtn.textContent = 'Sending...'; submitBtn.disabled = true; setTimeout(() => { alert("Thank you for your message! I'll get back to you soon."); contactForm.reset(); submitBtn.textContent = originalText; submitBtn.disabled = false; }, 2000); });
}


// PROJECT CARDS
function initProjectCards() { document.querySelectorAll('.project-card').forEach(card => { card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-15px) scale(1.02)'); card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) scale(1)'); }); }


// NAV ACTIVE LINKS 

function initActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]'); const navLinks = document.querySelectorAll('.nav-link'); function updateActiveLink() { let current = ''; sections.forEach(section => { const sectionTop = section.offsetTop - 100; const sectionHeight = section.offsetHeight; if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) { current = section.getAttribute('id'); } }); navLinks.forEach(link => { link.classList.remove('active'); if (link.getAttribute('href') === '#' + current) link.classList.add('active'); }); } window.addEventListener('scroll', updateActiveLink);
}

// FOOTER 
function initFooter() {
    const newsletterForm = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const message = document.getElementById('message');

    function showMessage(text, type) {
        message.textContent = text;
        message.className = `message ${type} show`;
        setTimeout(() => message.classList.remove('show'), 3000);
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', e => {
            e.preventDefault();
            const email = emailInput.value.trim();

            if (!email) return showMessage('Please enter your email address.', 'error');
            if (!validateEmail(email)) return showMessage('Please enter a valid email address.', 'error');

            const submitBtn = newsletterForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Subscribing...';
            submitBtn.disabled = true;

            setTimeout(() => {
                showMessage('Thank you for subscribing to our newsletter!', 'success');
                emailInput.value = '';
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Social icon click animation
    document.querySelectorAll('.social-icons a').forEach(link => {
        link.addEventListener('click', () => {
            link.style.transform = 'translateY(-3px) scale(1.1)';
            setTimeout(() => link.style.transform = '', 200);
        });
    });

    // Animate footer columns on scroll
    const footerColumns = document.querySelectorAll('.footer-col');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) setTimeout(() => entry.target.classList.add('animate'), index * 100);
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    footerColumns.forEach(column => observer.observe(column));

    // Logo fallback
    document.querySelectorAll('.footer-logo img').forEach(img => {
        img.addEventListener('error', () => {
            img.style.display = 'none';
            img.insertAdjacentHTML('afterend', '<span>MyCompany</span>');
        });
    });
}


// CSS ANIMATIONS 
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);


// WINDOW RESIZE 
window.addEventListener('resize', debounce(() => {
    const navMenu = document.getElementById('nav-menu');
    const navHamburger = document.getElementById('nav-hamburger');
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        navHamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}, 250));


// INITIALIZE EVERYTHING 
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initParallaxEffects();
    initHoverCards();
    initScrollAnimations();
    initContactForm();
    initProjectCards();
    initActiveNavLinks();
    initFooter();
    console.log('✅ Portfolio website initialized successfully!');
});

const testimonials = {
        kwabena: {
            initials: 'KA',
            name: 'Kwabena',
            tag: 'Systems overhaul',
            date: 'April 15, 2026',
            img: 'images/kwabena.jpg',
            message: `Thanks again — the whole launch ran so much smoother than our previous ones. Before we worked together I was the one holding every single piece together and just hoping nothing fell through. You came in, looked at how we were actually operating, and rebuilt it in a way that made sense for our team. The launch checklist alone saved us hours of back-and-forth. I don't think I realised how much energy I was wasting until it was gone.`
        },
        ama: {
            initials: 'AM',
            name: 'Ama',
            tag: 'Project handoff',
            date: 'April 12, 2026',
            img: 'images/ama.jpg',
            message: `You brought such clarity to everything. Honestly, the handoff process had always been a bit of a mess for us — things would get lost, context would disappear, and the next person would have to start from scratch. What you put together meant anyone could pick up where we left off and actually understand what was happening. My team noticed immediately. It felt like we finally had a professional operation.`
        },
        kwesi: {
            initials: 'KW',
            name: 'Kwesi',
            tag: 'Workflow audit',
            date: 'April 8, 2026',
            img: 'images/kwesi.jpg',
            message: `You saved me so much time. I came into the audit call a bit defensive honestly — I thought I had things mostly figured out. But you spotted three things in the first twenty minutes that I'd completely normalised. Once we fixed those, the whole week started moving differently. I'm getting the same output in noticeably fewer hours and I'm not drained at the end of the day. That's not a small thing.`
        },
        nana: {
            initials: 'NA',
            name: 'Nana',
            tag: 'Launch support',
            date: 'April 1, 2026',
            img: 'images/nana.jpg',
            message: `I'm finally feeling like I have a proper system. I've tried to build one myself a few times but it always fell apart because I built it for a version of my business that didn't quite exist yet. What we built together actually fits — it's flexible where it needs to be and firm where it needs to be. The launch went well but honestly the bigger win is that I now have something I'll use long after.`
        },
        michael: {
            initials: 'MI',
            name: 'Michael',
            tag: 'Ops delegation',
            date: 'March 20, 2026',
            img: 'images/michael.jpg',
            message: `Feels like a weight has been lifted. I'd been carrying too many things for too long and telling myself it was just what running a business looked like. The delegation framework you mapped out wasn't complicated but I needed someone to actually show me how to use it with my specific team. My Monday mornings look completely different now. I can think again.`
        },
        daniel: {
            initials: 'DA',
            name: 'Daniel',
            tag: 'Tool integration',
            date: 'March 14, 2026',
            img: 'images/daniel.jpg',
            message: `I finally feel like I have a system that works for me, not the other way around. I'd accumulated so many tools over the years that were supposed to make things easier but really just added noise. You cut through it, figured out what I was actually trying to do, and set up something clean. I use it every day now without thinking about it — which is exactly the point, right?`
        }
    };

    let activeId = null;

    function openPane(id) {
        const data = testimonials[id];
        if (!data) return;

        activeId = id;

        document.querySelectorAll('.irow').forEach(r => r.classList.remove('selected'));
        document.querySelector(`[data-id="${id}"]`).classList.add('selected');

        const content = document.getElementById('rpane-content');
        content.innerHTML = `
            <div class="rp-avatar">
                <img src="${data.img}" alt="${data.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <span class="rp-av-fallback">${data.initials}</span>
            </div>
            <div class="rp-name">${data.name}</div>
            <div class="rp-meta">
                <span class="rp-tag">${data.tag}</span>
                <span class="rp-dot-sep">·</span>
                <span class="rp-date">${data.date}</span>
            </div>
            <div class="rp-divider"></div>
            <p class="rp-message">${data.message}</p>
        `;

        const pane = document.getElementById('rpane');
        const inbox = document.querySelector('.inbox-body');
        pane.classList.add('open');
        inbox.classList.add('pane-open');

        const isMobile = window.innerWidth <= 680;
        if (isMobile) {
            document.getElementById('mob-overlay').classList.add('visible');
        }
    }

    function closePane() {
        activeId = null;
        document.querySelectorAll('.irow').forEach(r => r.classList.remove('selected'));

        const pane = document.getElementById('rpane');
        const inbox = document.querySelector('.inbox-body');
        pane.classList.remove('open');
        inbox.classList.remove('pane-open');
        document.getElementById('mob-overlay').classList.remove('visible');

        // ← Add this: reset rows scroll position after pane closes
        const rows = document.getElementById('rows');
        setTimeout(() => {
            rows.style.maxHeight = '';   // clear any inline override
            rows.scrollTop = 0;          // reset scroll to top
        }, 320); 
    }

    document.querySelectorAll('.irow').forEach(row => {
        row.addEventListener('click', () => {
            const id = row.dataset.id;
            if (activeId === id) {
                closePane();
            } else {
                openPane(id);
            }
        });
    });

    function filterRows(v) {
        const q = v.toLowerCase();
        document.querySelectorAll('#rows .irow').forEach(r => {
            r.style.display = r.dataset.s.includes(q) ? '' : 'none';
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 680) {
            document.getElementById('mob-overlay').classList.remove('visible');
        }
    });