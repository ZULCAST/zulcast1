// ==================== SISTEMA DE NAVEGACIÓN ====================
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Update active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ==================== SISTEMA DE TRADUCCIÓN ====================
const translations = {
    es: {
        // Navigation
        navHome: "Inicio",
        navAbout: "Sobre Mí",
        navSkills: "Habilidades",
        navExperience: "Experiencia",
        navCertifications: "Certificaciones",
        navContact: "Contactar",

        // Hero
        heroAvailable: "Disponible para trabajar",
        heroGreeting: "Hola, soy",
        heroName: "Ulises Castillo",
        heroRole: "Software Developer / DevOps",
        heroDescription: "Estudiante de Ingeniería Informática (8vo semestre) con experiencia en desarrollo de software usando Java, PHP, SQL y web development. Expandiéndome hacia DevOps/Cloud con Docker, CI/CD, Linux y automatización.",
        heroButtonProjects: "Ver Proyectos",
        heroButtonEmail: "Enviar Email",
        statTech: "Tecnologías",
        statProjects: "Proyectos",
        statYears: "Años Estudiando",

        // About
        aboutTag: "Conóceme",
        aboutTitle: "Sobre Mí",
        aboutHeading: "Estudiante de Ingeniería Informática - 8vo Semestre",
        aboutDesc1: "Desarrollador de software con experiencia en proyectos académicos y reales usando Java, PHP, SQL, HTML, CSS y JavaScript. Sólida base en desarrollo web Full Stack con enfoque en backend y bases de datos.",
        aboutDesc2: "Expandiendo competencias hacia DevOps/Cloud con experiencia práctica en Docker, Git, CI/CD pipelines, Linux y AWS/Azure. Apasionado por la automatización, infraestructura como código y sistemas confiables.",
        infoEmail: "Email",
        infoPhone: "Teléfono",
        infoLocation: "Ubicación",
        infoGithub: "GitHub",
        btnGithub: "Ver GitHub",
        btnDownloadCV: "Descargar CV",
        cardRealExp: "Experiencia Real",
        cardRealExpDesc: "Proyectos con clientes reales y sistemas en producción",
        cardCerts: "Certificaciones",
        cardCertsDesc: "AWS Services, Cisco Networking y más en progreso",
        cardFullStack: "Desarrollo Completo",
        cardFullStackDesc: "Frontend, Backend, Bases de Datos y DevOps",

        // Skills
        skillsTag: "Mis Habilidades",
        skillsTitle: "Habilidades",
        techSkills: "Habilidades Técnicas",
        softSkills: "Habilidades Blandas",
        btnViewMore: "Ver más habilidades",
        btnViewLess: "Ver menos habilidades",
        softTeamwork: "Trabajo en Equipo",
        softTeamworkDesc: "Colaboración efectiva con equipos multidisciplinarios",
        softProblem: "Resolución de Problemas",
        softProblemDesc: "Adaptación de soluciones técnicas",
        softComm: "Comunicación",
        softCommDesc: "Traducción de requerimientos a soluciones",
        softDevOps: "Mentalidad DevOps",
        softDevOpsDesc: "Automatización y mejora continua",

        // Experience
        expTag: "Mi Trayectoria",
        expTitle: "Experiencia",
        expProjects: "Experiencia Laboral",
        expEducation: "Educación",
        expSchool: "Proyectos Académicos",
        badgeReal: "PROYECTO REAL",
        badgeAcademic: "PROYECTO ACADÉMICO",
        theaterTitle: "Sistema de Gestión de Teatro",
        theaterRole: "Desarrollador Full Stack",
        theaterDesc: "Sistema completo para gestión de teatro con venta de taquilla, manejo de usuarios, reportes, estadísticas, mapeo de asientos, impresión de tickets y creación de eventos con selección de sala.",
        theaterItem1: "Testing y QA del sistema completo",
        theaterItem2: "Desarrollo de módulo de estadísticas y descuentos",
        theaterItem3: "Co-creación y diseño de base de datos",
        autobalanceTitle: "Plataforma Web AutoBalance",
        autobalanceRole: "Desarrollador Full Stack",
        autobalanceDesc: "Plataforma web para taller automotriz con gestión de servicios, productos y usuarios.",
        autobalanceItem1: "Frontend con HTML, CSS, Bootstrap, JS",
        autobalanceItem2: "Backend PHP + MySQL",
        autobalanceItem3: "Deploy en entorno público",
        limonTitle: "Sistema de Trazabilidad del Limón",
        limonRole: "Desarrollador Full Stack",
        limonDesc: "Sistema web para gestión completa de la cadena de producción de limón: desde siembra hasta venta final. Implementa bases de datos distribuidas con fragmentación vertical y horizontal.",
        limonItem1: "Arquitectura distribuida con fragmentación vertical/horizontal",
        limonItem2: "Motor FEDERATED de MySQL para consultas inter-servidor",
        limonItem3: "Trazabilidad completa con JOINs complejos",
        limonItem4: "Sistema CRUD: Siembras, Cosechas, Lotes, Ventas y Mermas",
        limonItem5: "Dashboard con estadísticas en tiempo real",
        projectLink: "Ver proyecto",
        tecnmDate: "2022 - 2027",
        tecnmTitle: "Ingeniería Informática",
        tecnmPlace: "TECNM Universidad Apatzingán Campus",
        tecnmDesc: "Formación integral en desarrollo de software, infraestructura, bases de datos y sistemas.",
        cobaemDate: "2019 - 2022",
        cobaemTitle: "Bachillerato en Economía Social",
        cobaemPlace: "COBAEM Apatzingán",
        cobaemDesc: "Formación en economía social y capacitación en TICs.",

        // Certifications
        certsTag: "Credenciales",
        certsTitle: "Certificaciones",
        certAWS: "AWS Services",
        certAWSIssuer: "Amazon Web Services",
        certAWSDesc: "Certificación en servicios de AWS",
        certCisco: "Cisco Networking",
        certCiscoIssuer: "Cisco Systems",
        certCiscoDesc: "Certificación en redes Cisco",
        certProgress: "En Progreso",
        certProgressIssuer: "Próximas certificaciones",
        certProgressDesc: "DevOps, Docker, Kubernetes, Ciberseguridad",
        certLink: "Ver credencial →",

        // Footer
        footerTagline: "Construyendo el futuro, una línea de código a la vez.",
        footerGithub: "GitHub",
        footerEmail: "Email",
        footerContact: "Contacto",
        footerRights: "Todos los derechos reservados."
    },
    en: {
        // Navigation
        navHome: "Home",
        navAbout: "About Me",
        navSkills: "Skills",
        navExperience: "Experience",
        navCertifications: "Certifications",
        navContact: "Contact",

        // Hero
        heroAvailable: "Available for work",
        heroGreeting: "Hi, I'm",
        heroName: "Ulises Castillo",
        heroRole: "Software Developer / DevOps",
        heroDescription: "Computer Engineering student (8th semester) with experience in software development using Java, PHP, SQL and web development. Expanding into DevOps/Cloud with Docker, CI/CD, Linux and automation.",
        heroButtonProjects: "View Projects",
        heroButtonEmail: "Send Email",
        statTech: "Technologies",
        statProjects: "Projects",
        statYears: "Years Studying",

        // About
        aboutTag: "Get to Know Me",
        aboutTitle: "About Me",
        aboutHeading: "Computer Engineering Student - 8th Semester",
        aboutDesc1: "Software developer with experience in academic and real projects using Java, PHP, SQL, HTML, CSS and JavaScript. Strong foundation in Full Stack web development with focus on backend and databases.",
        aboutDesc2: "Expanding skills into DevOps/Cloud with hands-on experience in Docker, Git, CI/CD pipelines, Linux and AWS/Azure. Passionate about automation, infrastructure as code and reliable systems.",
        infoEmail: "Email",
        infoPhone: "Phone",
        infoLocation: "Location",
        infoGithub: "GitHub",
        btnGithub: "View GitHub",
        btnDownloadCV: "Download CV",
        cardRealExp: "Real Experience",
        cardRealExpDesc: "Projects with real clients and production systems",
        cardCerts: "Certifications",
        cardCertsDesc: "AWS Services, Cisco Networking and more in progress",
        cardFullStack: "Full Stack",
        cardFullStackDesc: "Backend, Frontend, Databases and DevOps",

        // Skills
        skillsTag: "My Skills",
        skillsTitle: "Skills",
        techSkills: "Technical Skills",
        softSkills: "Soft Skills",
        btnViewMore: "View more skills",
        btnViewLess: "View less skills",
        softTeamwork: "Teamwork",
        softTeamworkDesc: "Effective collaboration with multidisciplinary teams",
        softProblem: "Problem Solving",
        softProblemDesc: "Adapting technical solutions",
        softComm: "Communication",
        softCommDesc: "Translating requirements into solutions",
        softDevOps: "DevOps Mindset",
        softDevOpsDesc: "Automation and continuous improvement",

        // Experience
        expTag: "My Journey",
        expTitle: "Experience",
        expProjects: "Work Experience",
        expEducation: "Education",
        expSchool: "Academic Projects",
        badgeReal: "REAL PROJECT",
        badgeAcademic: "ACADEMIC PROJECT",
        theaterTitle: "Theater Management System",
        theaterRole: "Full Stack Developer",
        theaterDesc: "Complete theater management system with ticket sales, user management, reports, statistics, seat mapping, ticket printing and event creation with room selection.",
        theaterItem1: "Testing and QA of complete system",
        theaterItem2: "Development of statistics and discounts module",
        theaterItem3: "Co-creation and database design",
        autobalanceTitle: "AutoBalance Web Platform",
        autobalanceRole: "Full Stack Developer",
        autobalanceDesc: "Web platform for automotive workshop with service, product and user management.",
        autobalanceItem1: "Frontend with HTML, CSS, Bootstrap, JS",
        autobalanceItem2: "Backend PHP + MySQL",
        autobalanceItem3: "Deploy in public environment",
        limonTitle: "Lemon Traceability System",
        limonRole: "Full Stack Developer",
        limonDesc: "Web system for complete management of lemon production chain: from planting to final sale. Implements distributed databases with vertical and horizontal fragmentation.",
        limonItem1: "Distributed architecture with vertical/horizontal fragmentation",
        limonItem2: "MySQL FEDERATED engine for inter-server queries",
        limonItem3: "Complete traceability with complex JOINs",
        limonItem4: "CRUD system: Planting, Harvests, Batches, Sales and Waste",
        limonItem5: "Dashboard with real-time statistics",
        projectLink: "View project",
        tecnmDate: "2022 - 2027",
        tecnmTitle: "Computer Engineering",
        tecnmPlace: "TECNM Universidad Apatzingán Campus",
        tecnmDesc: "Comprehensive training in software development, infrastructure, databases and systems.",
        cobaemDate: "2019 - 2022",
        cobaemTitle: "Bachelor's in Social Economics",
        cobaemPlace: "COBAEM Apatzingán",
        cobaemDesc: "Training in social economics and ICTs.",

        // Certifications
        certsTag: "Credentials",
        certsTitle: "Certifications",
        certAWS: "AWS Services",
        certAWSIssuer: "Amazon Web Services",
        certAWSDesc: "AWS services certification",
        certCisco: "Cisco Networking",
        certCiscoIssuer: "Cisco Systems",
        certCiscoDesc: "Cisco networking certification",
        certProgress: "In Progress",
        certProgressIssuer: "Upcoming certifications",
        certProgressDesc: "DevOps, Docker, Kubernetes, Cybersecurity",
        certLink: "View credential →",

        // Footer
        footerTagline: "Building the future, one line of code at a time.",
        footerGithub: "GitHub",
        footerEmail: "Email",
        footerContact: "Contact",
        footerRights: "All rights reserved."
    }
};

let currentLang = 'es';

// Translate page function
function translatePage(lang) {
    currentLang = lang;
    const t = translations[lang];

    console.log('Translating to:', lang);

    // Update language button text
    document.getElementById('langText').textContent = lang === 'es' ? 'EN' : 'ES';

    // Update hero section
    const heroAvailable = document.querySelector('.hero-badge span:last-child');
    if (heroAvailable) heroAvailable.textContent = t.heroAvailable;

    const heroGreeting = document.querySelector('.title-line');
    if (heroGreeting) heroGreeting.textContent = t.heroGreeting;

    const heroRole = document.querySelector('.typing-text');
    if (heroRole) heroRole.textContent = t.heroRole;

    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) heroDesc.textContent = t.heroDescription;

    // Update stats
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels[0]) statLabels[0].textContent = t.statTech;
    if (statLabels[1]) statLabels[1].textContent = t.statProjects;
    if (statLabels[2]) statLabels[2].textContent = t.statYears;

    // Update section headers
    const sections = {
        'sobre-mi': { tag: t.aboutTag, title: t.aboutTitle },
        'habilidades': { tag: t.skillsTag, title: t.skillsTitle },
        'experiencia': { tag: t.expTag, title: t.expTitle },
        'certificaciones': { tag: t.certsTag, title: t.certsTitle }
    };

    Object.keys(sections).forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const tag = section.querySelector('.section-tag');
            const title = section.querySelector('.section-title');
            if (tag) tag.textContent = sections[sectionId].tag;
            if (title) title.textContent = sections[sectionId].title;
        }
    });

    // Update nav links
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks[0]) navLinks[0].textContent = t.navHome;
    if (navLinks[1]) navLinks[1].textContent = t.navAbout;
    if (navLinks[2]) navLinks[2].textContent = t.navSkills;
    if (navLinks[3]) navLinks[3].textContent = t.navExperience;
    if (navLinks[4]) navLinks[4].textContent = t.navCertifications;

    // Update buttons
    const btnContact = document.querySelector('.btn-contact');
    if (btnContact) btnContact.textContent = t.navContact;

    // ========== HERO BUTTONS ==========
    const heroBtns = document.querySelectorAll('.hero-cta .btn');
    if (heroBtns[0]) {
        const span = heroBtns[0].querySelector('span');
        if (span) span.textContent = t.heroButtonProjects;
    }
    if (heroBtns[1]) {
        const span = heroBtns[1].querySelector('span');
        if (span) span.textContent = t.heroButtonEmail;
    }

    // ========== ABOUT SECTION ==========
    const aboutHeading = document.querySelector('.about-content h3');
    if (aboutHeading) aboutHeading.textContent = t.aboutHeading;

    const aboutParas = document.querySelectorAll('.about-content p');
    if (aboutParas[0]) aboutParas[0].textContent = t.aboutDesc1;
    if (aboutParas[1]) aboutParas[1].textContent = t.aboutDesc2;

    // Info labels
    const infoLabels = document.querySelectorAll('.info-label');
    if (infoLabels[0]) infoLabels[0].textContent = t.infoEmail;
    if (infoLabels[1]) infoLabels[1].textContent = t.infoPhone;
    if (infoLabels[2]) infoLabels[2].textContent = t.infoLocation;
    if (infoLabels[3]) infoLabels[3].textContent = t.infoGithub;

    // About action buttons
    const aboutBtns = document.querySelectorAll('.about-actions .btn');
    if (aboutBtns[0]) aboutBtns[0].textContent = t.btnGithub;
    if (aboutBtns[1]) aboutBtns[1].textContent = t.btnDownloadCV;

    // Experience cards
    const expCards = document.querySelectorAll('.experience-card');
    if (expCards[0]) {
        const h4 = expCards[0].querySelector('h4');
        const p = expCards[0].querySelector('p');
        if (h4) h4.textContent = t.cardRealExp;
        if (p) p.textContent = t.cardRealExpDesc;
    }
    if (expCards[1]) {
        const h4 = expCards[1].querySelector('h4');
        const p = expCards[1].querySelector('p');
        if (h4) h4.textContent = t.cardCerts;
        if (p) p.textContent = t.cardCertsDesc;
    }
    if (expCards[2]) {
        const h4 = expCards[2].querySelector('h4');
        const p = expCards[2].querySelector('p');
        if (h4) h4.textContent = t.cardFullStack;
        if (p) p.textContent = t.cardFullStackDesc;
    }

    // ========== SKILLS SECTION ==========
    const categoryTitles = document.querySelectorAll('.category-title');
    if (categoryTitles[0]) {
        const nodes = categoryTitles[0].childNodes;
        if (nodes[nodes.length - 1]) nodes[nodes.length - 1].textContent = ' ' + t.techSkills;
    }
    if (categoryTitles[1]) {
        const nodes = categoryTitles[1].childNodes;
        if (nodes[nodes.length - 1]) nodes[nodes.length - 1].textContent = ' ' + t.softSkills;
    }

    // Toggle button
    const toggleText = document.getElementById('toggleText');
    const isExpanded = document.querySelector('.hidden-skill.show') !== null;
    if (toggleText) toggleText.textContent = isExpanded ? t.btnViewLess : t.btnViewMore;

    // Soft skills
    const softSkillCards = document.querySelectorAll('.soft-skill-card');
    if (softSkillCards[0]) {
        softSkillCards[0].querySelector('h4').textContent = t.softTeamwork;
        softSkillCards[0].querySelector('p').textContent = t.softTeamworkDesc;
    }
    if (softSkillCards[1]) {
        softSkillCards[1].querySelector('h4').textContent = t.softProblem;
        softSkillCards[1].querySelector('p').textContent = t.softProblemDesc;
    }
    if (softSkillCards[2]) {
        softSkillCards[2].querySelector('h4').textContent = t.softComm;
        softSkillCards[2].querySelector('p').textContent = t.softCommDesc;
    }
    if (softSkillCards[3]) {
        softSkillCards[3].querySelector('h4').textContent = t.softDevOps;
        softSkillCards[3].querySelector('p').textContent = t.softDevOpsDesc;
    }

    // ========== EXPERIENCE SECTION ==========
    console.log('Translating experience section...');
    const expCategoryTitles = document.querySelectorAll('.exp-category-title');
    console.log('Found exp-category-titles:', expCategoryTitles.length);

    if (expCategoryTitles[0]) {
        const nodes = expCategoryTitles[0].childNodes;
        if (nodes[nodes.length - 1]) nodes[nodes.length - 1].textContent = ' ' + t.expProjects;
    }
    if (expCategoryTitles[1]) {
        const nodes = expCategoryTitles[1].childNodes;
        if (nodes[nodes.length - 1]) nodes[nodes.length - 1].textContent = ' ' + t.expSchool;
    }
    if (expCategoryTitles[2]) {
        const nodes = expCategoryTitles[2].childNodes;
        if (nodes[nodes.length - 1]) nodes[nodes.length - 1].textContent = ' ' + t.expEducation;
    }

    // Project badges
    const projectBadges = document.querySelectorAll('.project-badge');
    console.log('Found project-badges:', projectBadges.length);
    if (projectBadges[0]) projectBadges[0].textContent = t.badgeReal;
    if (projectBadges[1]) projectBadges[1].textContent = t.badgeAcademic;
    if (projectBadges[2]) projectBadges[2].textContent = t.badgeAcademic;

    // Theater project
    const projectCards = document.querySelectorAll('.project-card');
    console.log('Found project-cards:', projectCards.length);
    if (projectCards[0]) {
        projectCards[0].querySelector('h4').textContent = t.theaterTitle;
        projectCards[0].querySelector('.project-role').textContent = t.theaterRole;
        projectCards[0].querySelector('.project-desc').textContent = t.theaterDesc;
        const items = projectCards[0].querySelectorAll('.project-highlights li');
        console.log('Theater items found:', items.length);
        if (items[0]) items[0].textContent = t.theaterItem1;
        if (items[1]) items[1].textContent = t.theaterItem2;
        if (items[2]) items[2].textContent = t.theaterItem3;
    }

    // AutoBalance project
    if (projectCards[1]) {
        projectCards[1].querySelector('h4').textContent = t.autobalanceTitle;
        projectCards[1].querySelector('.project-role').textContent = t.autobalanceRole;
        projectCards[1].querySelector('.project-desc').textContent = t.autobalanceDesc;
        const items = projectCards[1].querySelectorAll('.project-highlights li');
        if (items[0]) items[0].textContent = t.autobalanceItem1;
        if (items[1]) items[1].textContent = t.autobalanceItem2;
        if (items[2]) items[2].textContent = t.autobalanceItem3;
        const link = projectCards[1].querySelector('.project-link');
        if (link) link.textContent = t.projectLink + ' →';
    }

    // LIMON project
    if (projectCards[2]) {
        projectCards[2].querySelector('h4').textContent = t.limonTitle;
        projectCards[2].querySelector('.project-role').textContent = t.limonRole;
        projectCards[2].querySelector('.project-desc').textContent = t.limonDesc;
        const items = projectCards[2].querySelectorAll('.project-highlights li');
        if (items[0]) items[0].textContent = t.limonItem1;
        if (items[1]) items[1].textContent = t.limonItem2;
        if (items[2]) items[2].textContent = t.limonItem3;
        if (items[3]) items[3].textContent = t.limonItem4;
        if (items[4]) items[4].textContent = t.limonItem5;
    }

    // Timeline education
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems[0]) {
        timelineItems[0].querySelector('.timeline-date').textContent = t.tecnmDate;
        timelineItems[0].querySelector('h4').textContent = t.tecnmTitle;
        timelineItems[0].querySelector('.timeline-place').textContent = t.tecnmPlace;
        const paras = timelineItems[0].querySelectorAll('p');
        if (paras[1]) paras[1].textContent = t.tecnmDesc;
    }
    if (timelineItems[1]) {
        timelineItems[1].querySelector('.timeline-date').textContent = t.cobaemDate;
        timelineItems[1].querySelector('h4').textContent = t.cobaemTitle;
        timelineItems[1].querySelector('.timeline-place').textContent = t.cobaemPlace;
        const paras = timelineItems[1].querySelectorAll('p');
        if (paras[1]) paras[1].textContent = t.cobaemDesc;
    }

    // ========== CERTIFICATIONS ==========
    const certCards = document.querySelectorAll('.cert-card');
    if (certCards[0]) {
        certCards[0].querySelector('h4').textContent = t.certAWS;
        certCards[0].querySelector('.cert-issuer').textContent = t.certAWSIssuer;
        certCards[0].querySelector('.cert-desc').textContent = t.certAWSDesc;
        const link = certCards[0].querySelector('.cert-link');
        if (link) link.textContent = t.certLink;
    }
    if (certCards[1]) {
        certCards[1].querySelector('h4').textContent = t.certCisco;
        certCards[1].querySelector('.cert-issuer').textContent = t.certCiscoIssuer;
        certCards[1].querySelector('.cert-desc').textContent = t.certCiscoDesc;
        const link = certCards[1].querySelector('.cert-link');
        if (link) link.textContent = t.certLink;
    }
    if (certCards[2]) {
        certCards[2].querySelector('h4').textContent = t.certProgress;
        certCards[2].querySelector('.cert-issuer').textContent = t.certProgressIssuer;
        certCards[2].querySelector('.cert-desc').textContent = t.certProgressDesc;
    }

    // ========== FOOTER ==========
    const footerBrand = document.querySelector('.footer-brand p');
    if (footerBrand) footerBrand.textContent = t.footerTagline;

    const footerLinks = document.querySelectorAll('.footer-links a');
    if (footerLinks[0]) footerLinks[0].textContent = t.footerGithub;
    if (footerLinks[1]) footerLinks[1].textContent = t.footerEmail;
    if (footerLinks[2]) footerLinks[2].textContent = t.footerContact;

    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom) footerBottom.textContent = `© 2024 Ulises Castillo Zamora. ${t.footerRights}`;
}

// Language toggle
document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    translatePage(currentLang);
});

// ==================== ANIMACIONES Y EFECTOS ====================
// Intersection Observer for fade-in animations
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

// Observe elements
document.querySelectorAll('.skill-card, .experience-card, .project-card, .cert-card, .timeline-item, .soft-skill-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Animated counters for stats
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValue = entry.target;
            const targetValue = parseInt(statValue.getAttribute('data-value'));
            animateValue(statValue, 0, targetValue, 2000);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-value').forEach(stat => {
    statsObserver.observe(stat);
});

// Typing effect for hero subtitle
const typingElement = document.querySelector('.typing-text');
if (typingElement) {
    const text = typingElement.textContent;
    typingElement.textContent = '';
    let i = 0;

    const typeWriter = () => {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };

    setTimeout(typeWriter, 500);
}

// Toggle hidden skills
document.getElementById('toggleSkills').addEventListener('click', function () {
    const hiddenSkills = document.querySelectorAll('.hidden-skill');
    const toggleText = document.getElementById('toggleText');
    const toggleIcon = document.getElementById('toggleIcon');
    const isShowing = hiddenSkills[0].classList.contains('show');

    hiddenSkills.forEach((skill, index) => {
        if (isShowing) {
            skill.classList.remove('show');
            setTimeout(() => {
                skill.style.display = 'none';
            }, 500);
        } else {
            skill.style.display = 'block';
            setTimeout(() => {
                skill.classList.add('show');
            }, 10 + (index * 50));
        }
    });

    const t = translations[currentLang];
    toggleText.textContent = isShowing ? t.btnViewMore : t.btnViewLess;
    toggleIcon.innerHTML = isShowing
        ? '<polyline points="6 9 12 15 18 9"></polyline>'
        : '<polyline points="18 15 12 9 6 15"></polyline>';
});

// Scroll to top button
const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// CV download
document.getElementById('downloadCV').addEventListener('click', (e) => {
    e.preventDefault();
    // Add your CV download link here
    alert(currentLang === 'es'
        ? 'Para descargar el CV, contacta directamente por email'
        : 'To download CV, please contact directly by email');
});

// Progress bars animation
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.skill-progress');
            if (progressBar) {
                const progress = progressBar.style.getPropertyValue('--progress');
                progressBar.style.width = progress;
            }
            progressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-card').forEach(card => {
    progressObserver.observe(card);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual && scrolled < window.innerHeight) {
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Cursor trail effect (subtle)
let lastX = 0;
let lastY = 0;
let trails = [];

document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.98) {
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            opacity: 0.3;
            z-index: 9999;
            animation: trailFade 1s ease-out forwards;
        `;
        document.body.appendChild(trail);

        setTimeout(() => trail.remove(), 1000);
    }
});

// Add trail animation
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trailFade {
        to {
            opacity: 0;
            transform: translateY(-20px) scale(0);
        }
    }
`;
document.head.appendChild(trailStyle);

// Dynamic particle background
function createParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.3};
        z-index: 1;
        animation: float ${10 + Math.random() * 20}s linear infinite;
    `;
    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 30000);
}

// Create particles periodically
setInterval(createParticle, 3000);

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinksMenu = document.querySelector('.nav-links');
const navOverlay = document.getElementById('navOverlay');

function closeMobileMenu() {
    navLinksMenu.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
    if (navOverlay) navOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
}

function openMobileMenu() {
    navLinksMenu.classList.add('active');
    mobileMenuBtn.classList.add('active');
    if (navOverlay) navOverlay.classList.add('active');
    document.body.classList.add('menu-open');
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = navLinksMenu.classList.contains('active');
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
}

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.nav-links .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

// Close mobile menu when overlay is clicked
if (navOverlay) {
    navOverlay.addEventListener('click', () => {
        closeMobileMenu();
    });
}


// Smooth reveal on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization: Debounce scroll events
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

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(() => {
    // Your scroll logic here
}, 10));

console.log('🚀 Portfolio loaded successfully!');
