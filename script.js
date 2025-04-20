document.addEventListener('DOMContentLoaded', function() {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Cursor hover effect
    const hoverElements = document.querySelectorAll('a, button, .cyber-portfolio-item, .cyber-filter-btn, .cyber-social-icon, .cyber-menu-toggle');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        });
    });

    // Mobile Menu
    const menuToggle = document.querySelector('.cyber-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.cyber-nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.cyber-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Typed.js - Typing effect
    if (document.querySelector('.cyber-typed')) {
        const typed = new Typed('.cyber-typed', {
            strings: ['Full Stack Developer', 'JavaScript Specialist', 'Creative Freelancer', 'UI/UX'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            showCursor: false
        });
    }
    
    // Particles.js - Particle effect
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00f0ff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00f0ff",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
    
    // Portfolio filter
    const filterButtons = document.querySelectorAll('.cyber-filter-btn');
    const portfolioItems = document.querySelectorAll('.cyber-portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Carrossel de Habilidades e Portfólio
    function setupCarousels() {
        const skillContainers = document.querySelectorAll('.cyber-skills-container');
        const portfolioContainer = document.querySelector('.cyber-portfolio-container');
        
        // Adiciona navegação por arrasto
        function setupDragScroll(container) {
            let isDown = false;
            let startX;
            let scrollLeft;
            
            container.addEventListener('mousedown', (e) => {
                isDown = true;
                container.classList.add('active');
                startX = e.pageX - container.offsetLeft;
                scrollLeft = container.scrollLeft;
            });
            
            container.addEventListener('mouseleave', () => {
                isDown = false;
                container.classList.remove('active');
            });
            
            container.addEventListener('mouseup', () => {
                isDown = false;
                container.classList.remove('active');
            });
            
            container.addEventListener('mousemove', (e) => {
                if(!isDown) return;
                e.preventDefault();
                const x = e.pageX - container.offsetLeft;
                const walk = (x - startX) * 2;
                container.scrollLeft = scrollLeft - walk;
            });
        }
        
        skillContainers.forEach(container => {
            setupDragScroll(container);
        });
        
        if(portfolioContainer) {
            setupDragScroll(portfolioContainer);
        }
        
        // Adiciona botões de navegação opcionais
        function addNavigationButtons() {
            const containers = [...skillContainers];
            if(portfolioContainer) containers.push(portfolioContainer);
            
            containers.forEach(container => {
                const prevBtn = document.createElement('button');
                prevBtn.className = 'carousel-btn carousel-prev';
                prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
                
                const nextBtn = document.createElement('button');
                nextBtn.className = 'carousel-btn carousel-next';
                nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
                
                container.parentNode.insertBefore(prevBtn, container);
                container.parentNode.appendChild(nextBtn);
                
                prevBtn.addEventListener('click', () => {
                    container.scrollBy({ left: -300, behavior: 'smooth' });
                });
                
                nextBtn.addEventListener('click', () => {
                    container.scrollBy({ left: 300, behavior: 'smooth' });
                });
            });
        }
        
        // Descomente se quiser botões de navegação
        // addNavigationButtons();
    }
    
    // Inicializa os carrosséis
    setupCarousels();
    
    // Animate skill bars
    const animateSkills = function() {
        const skillBars = document.querySelectorAll('.cyber-skill-progress');
        
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    };
    
    // Scroll animation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.cyber-about-content, .cyber-skill-card, .cyber-portfolio-item, .cyber-contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.cyber-about-content, .cyber-skill-card, .cyber-portfolio-item, .cyber-contact-form');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check on page load
    animateOnScroll();
    animateSkills();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Contact form
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Mostrar mensagem de carregamento
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;
        });
    }
    
    // Update year in footer
    document.getElementById('cyber-year').textContent = new Date().getFullYear();
});

// Verificar se é mobile
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Desativar efeitos em mobile
if (isMobile()) {
    // Remover cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    if (cursor && cursorFollower) {
        cursor.remove();
        cursorFollower.remove();
    }
    
    // Ajustar containers
    document.querySelectorAll('.cyber-skills-container, .cyber-portfolio-container').forEach(container => {
        container.style.overflowX = 'hidden';
        container.style.flexWrap = 'wrap';
    });
    
    // Ajustar grids
    document.querySelectorAll('.cyber-skills-grid, .cyber-portfolio-grid').forEach(grid => {
        grid.style.flexWrap = 'wrap';
        grid.style.width = '100%';
    });
    
    // Ajustar itens
    document.querySelectorAll('.cyber-skill-card, .cyber-portfolio-item').forEach(item => {
        item.style.minWidth = '100%';
    });
}

// Função para corrigir completamente a responsividade
function fixMobileLayout() {
    const isMobile = window.innerWidth <= 768;
    
    // Elementos que precisam de ajuste
    const portfolioGrid = document.querySelector('.cyber-portfolio-grid');
    const skillsGrid = document.querySelector('.cyber-skills-grid');
    
    if (isMobile) {
        // Forçar layout de grid em uma coluna
        if (portfolioGrid) {
            portfolioGrid.style.display = 'grid';
            portfolioGrid.style.gridTemplateColumns = '1fr';
            portfolioGrid.style.overflow = 'visible';
        }
        
        if (skillsGrid) {
            skillsGrid.style.display = 'grid';
            skillsGrid.style.gridTemplateColumns = '1fr';
            skillsGrid.style.overflow = 'visible';
        }
        
        // Remover qualquer largura mínima
        document.querySelectorAll('.cyber-portfolio-item, .cyber-skill-card').forEach(item => {
            item.style.minWidth = '100%';
            item.style.width = '100%';
        });
    } else {
        // Restaurar layout original em desktop
        if (portfolioGrid) {
            portfolioGrid.style.display = 'flex';
            portfolioGrid.style.overflowX = 'auto';
        }
        
        if (skillsGrid) {
            skillsGrid.style.display = 'flex';
            skillsGrid.style.overflowX = 'auto';
        }
    }
}

// Executar ao carregar e redimensionar
window.addEventListener('load', fixMobileLayout);
window.addEventListener('resize', fixMobileLayout);