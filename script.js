// ============== NAVBAR SCROLL EFFECT ==============
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ============== HAMBURGER MENU ==============
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Cerrar menú al hacer click en un link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// ============== CONTACTAR WHATSAPP ==============
function contactarWhatsApp() {
    const numero = '525551234567';
    const mensaje = 'Hola, me gustaría hacer una reserva en Crown Barber Studio';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// ============== SCROLL REVEAL ANIMATION ==============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todos los elementos con clase scroll-reveal
document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});

// ============== SMOOTH SCROLL FALLBACK ==============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============== RIPPLE EFFECT EN BOTONES (OPCIONAL) ==============
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Aquí puedes agregar efectos visuales adicionales si lo deseas
    });
});

// ============== EFECTO PARALLAX SUAVE (OPCIONAL) ==============
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// ============== ANIMACIÓN DE NÚMEROS (CONTADOR) ==============
function animateCounter(element, target, duration = 2000) {
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// ============== VALIDACIÓN DE EMAIL EN FORMULARIOS (SI LOS HAY) ==============
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ============== LAZY LOAD DE IMÁGENES ==============
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============== REGISTRO DE EVENTOS PARA ANALYTICS (OPCIONAL) ==============
function trackEvent(eventName, eventData = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    console.log(`Event tracked: ${eventName}`, eventData);
}

// Ejemplo: Rastrear clics en botón de WhatsApp
document.querySelector('.whatsapp-float')?.addEventListener('click', () => {
    trackEvent('whatsapp_click', { 'section': 'floating_button' });
});

// ============== FUNCIÓN PARA COMPARTIR EN REDES SOCIALES ==============
function compartirEnRedes(red) {
    const url = window.location.href;
    const titulo = 'Crown Barber Studio - Tu Estilo Comienza Aquí';
    
    const urls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(titulo)}&url=${encodeURIComponent(url)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(titulo + ' ' + url)}`,
        instagram: `https://www.instagram.com/`
    };
    
    if (urls[red]) {
        window.open(urls[red], '_blank');
    }
}

// ============== DETECTAR MODO OSCURO DEL SISTEMA ==============
function detectarModoOscuro() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.style.colorScheme = 'dark';
    }
}
detectarModoOscuro();

// ============== NOTIFICACIÓN DE SOPORTE PARA CARACTERÍSTICAS ==============
document.addEventListener('DOMContentLoaded', () => {
    console.log('%cCrown Barber Studio', 'font-size: 24px; font-weight: bold; color: #d4af37;');
    console.log('%cDiseñado y desarrollado con precisión.', 'font-size: 12px; color: #b0b0b0;');
});

// ============== PREVENIR COMPORTAMIENTOS NO DESEADOS ==============
document.addEventListener('contextmenu', (e) => {
    // Permitir menú contextual normal (descomenta la siguiente línea si quieres deshabilitarlo)
    // e.preventDefault();
});

// ============== SCROLL POSITION MEMORY ==============
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPosition', window.scrollY);
});

window.addEventListener('load', () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
        sessionStorage.removeItem('scrollPosition');
    }
});

// ============== ACTIVAR MODO NOCHE/DÍA (OPCIONAL) ==============
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Cargar preferencia guardada
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ============== UTILIDADES ==============

// Función para obtener parámetros de URL
function getURLParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Función para copiar al portapapeles
function copiarAlPortapapeles(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        console.log('Copiado al portapapeles: ' + texto);
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}

// Función para redirigir a teléfono
function llamarTeléfono(numero) {
    window.location.href = `tel:${numero}`;
}

// ============== MONITOREO DE RENDIMIENTO ==============
if (window.performance && window.performance.navigation.type === 1) {
    console.log('La página fue recargada');
}

// Medir tiempo de carga
window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Tiempo total de carga: ' + pageLoadTime + 'ms');
});

// ============== RESPONSIVE BREAKPOINTS ==============
const breakpoints = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    wide: 1400
};

function getCurrentBreakpoint() {
    const width = window.innerWidth;
    if (width <= breakpoints.mobile) return 'mobile';
    if (width <= breakpoints.tablet) return 'tablet';
    if (width <= breakpoints.desktop) return 'desktop';
    if (width <= breakpoints.wide) return 'wide';
    return 'ultra-wide';
}

// Detectar cambios de breakpoint
let currentBreakpoint = getCurrentBreakpoint();
window.addEventListener('resize', () => {
    const newBreakpoint = getCurrentBreakpoint();
    if (newBreakpoint !== currentBreakpoint) {
        currentBreakpoint = newBreakpoint;
        console.log('Breakpoint changed to:', currentBreakpoint);
    }
});