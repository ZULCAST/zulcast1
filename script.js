// ==================== SISTEMA DE NAVEGACIÓN ====================
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const target = document.querySelector(targetId);
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
        heroDescription: "Estudiante de Ingeniería Informática (8vo semestre) apasionado por crear soluciones innovadoras. Experiencia en desarrollo Full Stack con Java, PHP, SQL y tecnologías web modernas. Expandiéndome hacia el mundo DevOps/Cloud con Docker, CI/CD, Linux y automatización.",
        heroButtonProjects: "Ver Proyectos",
        heroButtonEmail: "Contactar",
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
        softAdaptability: "Adaptabilidad",
        softAdaptabilityDesc: "Rápido aprendizaje de nuevas tecnologías",
        softTimeManagement: "Gestión del Tiempo",
        softTimeManagementDesc: "Organización y cumplimiento de plazos",
        softProactivity: "Proactividad",
        softProactivityDesc: "Iniciativa para proponer mejoras",

        // Experience
        expTag: "Mi Trayectoria",
        expTitle: "Experiencia",
        expProjects: "Experiencia Laboral",
        expEducation: "Educación",
        expSchool: "Proyectos Académicos",
        expPersonal: "Proyectos Personales",
        btnShowProjects: "Ver más proyectos",
        btnHideProjects: "Ocultar proyectos",
        badgeReal: "PROYECTO REAL",
        badgeAcademic: "PROYECTO ACADÉMICO",
        badgePersonal: "PROYECTO PERSONAL",
        // PADDI
        paddiTitle: "PADDI — Plataforma de Apoyo para Discalculia con IA",
        paddiRole: "Colaborador Clave - Implementación de IA",
        paddiDesc: "Plataforma educativa que ayuda a niños con discalculia y autismo a través de 9 juegos interactivos y análisis inteligente personalizado. Responsable del diseño e implementación completa del módulo de IA que genera reportes personalizados.",
        paddiItem1: "Diseño e implementación completa del módulo de IA con Python y FastAPI",
        paddiItem2: "Integración de Groq/OpenAI para análisis personalizado de progreso estudiantil",
        paddiItem3: "Sistema de generación automática de reportes PDF con recomendaciones específicas",
        paddiItem4: "Desarrollo de algoritmos de análisis de datos educativos",
        paddiItem5: "Colaboración en arquitectura del sistema y base de datos",
        paddiItem6: "Implementación de sistema de mensajería en tiempo real con Socket.IO",
        // FlashShare
        flashshareTitle: "FlashShare - Transferencia P2P",
        flashshareRole: "Desarrollador Full Stack",
        flashshareDesc: "Sistema de transferencia de archivos en tiempo real y efímero usando Node.js y WebSockets. Permite compartir archivos entre dispositivos instantáneamente sin almacenamiento permanente.",
        flashshareItem1: "Transferencia en tiempo real con Socket.io",
        flashshareItem2: "Manejo de Buffers y Streams para archivos binarios",
        flashshareItem3: "Arquitectura efímera sin base de datos (In-Memory)",
        flashshareItem4: "Interfaz moderna y responsiva",
        // Qube
        qubeTitle: "Qube - Generador de QR",
        qubeRole: "Desarrollador Frontend",
        qubeDesc: "Aplicación web para convertir URLs en códigos QR de forma instantánea. Interfaz moderna e intuitiva con experiencia de usuario fluida. Permite generar y descargar códigos QR con un solo clic.",
        qubeItem1: "Generación instantánea de códigos QR",
        qubeItem2: "Descarga directa en formato PNG",
        qubeItem3: "Diseño responsivo y minimalista",
        // POS
        posTitle: "Sistema POS — Tienda de Abarrotes",
        posRole: "Desarrollador Full Stack",
        posDesc: "Aplicación de escritorio tipo Punto de Venta para una tienda de abarrotes real. Incluye sistema de login con roles (Administrador y Cajero), gestión completa de productos, proveedores y clientes con control de deudas y abonos, registro de ventas con corte de caja y generación de reportes profesionales.",
        posItem1: "CRUD completo de Productos, Proveedores y Clientes",
        posItem2: "Sistema de deudas y abonos para clientes",
        posItem3: "Registro de ventas con corte de caja",
        posItem4: "Reportes con JasperReports (clientes, productos, precios, proveedores)",
        posItem5: "Inventario con buscador y filtro en tiempo real",
        posItem6: "Interfaz con pestañas y roles de usuario (Admin/Cajero)",
        theaterTitle: "Sistema de Gestión de Teatro",
        theaterRole: "Colaborador de Desarrollo",
        theaterDesc: "Sistema completo para gestión de teatro con venta de taquilla, manejo de usuarios, reportes, estadísticas, mapeo de asientos, impresión de tickets y creación de eventos con selección de sala.",
        theaterItem1: "Diseño y arquitectura de la base de datos",
        theaterItem2: "Desarrollo de funcionalidades clave del módulo de administración",
        theaterItem3: "Implementación del sistema de descuentos",
        theaterItem4: "Colaboración en el módulo de estadísticas",
        theaterItem5: "Testing y QA del sistema completo",
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
        footerTagline: "Transformando ideas en soluciones tecnológicas.",
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
        heroDescription: "Informatic Engineering student (8th semester) passionate about creating innovative solutions. Experience in Full Stack development with Java, PHP, SQL and modern web technologies. Expanding into the DevOps/Cloud world with Docker, CI/CD, Linux and automation.",
        heroButtonProjects: "View Projects",
        heroButtonEmail: "Contact",
        statTech: "Technologies",
        statProjects: "Projects",
        statYears: "Years Studying",

        // About
        aboutTag: "Get to Know Me",
        aboutTitle: "About Me",
        aboutHeading: "Informatic Engineering Student - 8th Semester",
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
        softAdaptability: "Adaptability",
        softAdaptabilityDesc: "Fast learning of new technologies",
        softTimeManagement: "Time Management",
        softTimeManagementDesc: "Organization and meeting deadlines",
        softProactivity: "Proactivity",
        softProactivityDesc: "Initiative to propose improvements",

        // Experience
        expTag: "My Journey",
        expTitle: "Experience",
        expProjects: "Work Experience",
        expEducation: "Education",
        expSchool: "Academic Projects",
        expPersonal: "Personal Projects",
        btnShowProjects: "View more projects",
        btnHideProjects: "Hide projects",
        badgeReal: "REAL PROJECT",
        badgeAcademic: "ACADEMIC PROJECT",
        badgePersonal: "PERSONAL PROJECT",
        // Theater
        theaterTitle: "Theater Management System",
        theaterRole: "Development Collaborator",
        theaterDesc: "Complete theater management system with ticket sales, user management, reports, statistics, seat mapping, ticket printing and event creation with room selection.",
        theaterItem1: "Database design and architecture",
        theaterItem2: "Development of key administration module features",
        theaterItem3: "Implementation of discount system",
        theaterItem4: "Collaboration on statistics module",
        theaterItem5: "Testing and QA of complete system",
        // PADDI
        paddiTitle: "PADDI — Support Platform for Dyscalculia with AI",
        paddiRole: "Key Contributor - AI Implementation",
        paddiDesc: "Educational platform that helps children with dyscalculia and autism through 9 interactive games and personalized intelligent analysis. Responsible for the complete design and implementation of the AI module that generates personalized reports.",
        paddiItem1: "Complete design and implementation of AI module with Python and FastAPI",
        paddiItem2: "Integration of Groq/OpenAI for personalized student progress analysis",
        paddiItem3: "Automatic PDF report generation system with specific recommendations",
        paddiItem4: "Development of educational data analysis algorithms",
        paddiItem5: "Collaboration on system architecture and database design",
        paddiItem6: "Implementation of real-time messaging system with Socket.IO",
        // Limón
        limonTitle: "Lemon Traceability System",
        limonRole: "Full Stack Developer",
        limonDesc: "Web system for complete management of lemon production chain: from planting to final sale. Implements distributed databases with vertical and horizontal fragmentation.",
        limonItem1: "Distributed architecture with vertical/horizontal fragmentation",
        limonItem2: "MySQL FEDERATED engine for inter-server queries",
        limonItem3: "Complete traceability with complex JOINs",
        limonItem4: "CRUD system: Planting, Harvests, Batches, Sales and Waste",
        limonItem5: "Dashboard with real-time statistics",
        // FlashShare
        flashshareTitle: "FlashShare - P2P Transfer",
        flashshareRole: "Full Stack Developer",
        flashshareDesc: "Real-time ephemeral file transfer system using Node.js and WebSockets. Allows instant file sharing between devices without permanent storage.",
        flashshareItem1: "Real-time transfer with Socket.io",
        flashshareItem2: "Handling Buffers and Streams for binary files",
        flashshareItem3: "Ephemeral architecture without database (In-Memory)",
        flashshareItem4: "Modern and responsive interface",
        // Qube
        qubeTitle: "Qube - QR Generator",
        qubeRole: "Frontend Developer",
        qubeDesc: "Web application to convert URLs into QR codes instantly. Modern and intuitive interface with smooth user experience. Generate and download QR codes with a single click.",
        qubeItem1: "Instant QR code generation",
        qubeItem2: "Direct download in PNG format",
        qubeItem3: "Responsive and minimalist design",
        // POS
        posTitle: "POS System — Grocery Store",
        posRole: "Full Stack Developer",
        posDesc: "Desktop Point of Sale application for a real grocery store. Includes login system with roles (Administrator and Cashier), complete management of products, suppliers and customers with debt and payment control, sales recording with cash register closing and professional report generation.",
        posItem1: "Complete CRUD for Products, Suppliers and Customers",
        posItem2: "Debt and payment system for customers",
        posItem3: "Sales recording with cash register closing",
        posItem4: "Reports with JasperReports (customers, products, prices, suppliers)",
        posItem5: "Inventory with real-time search and filter",
        posItem6: "Tabbed interface and user roles (Admin/Cashier)",
        // AutoBalance
        autobalanceTitle: "AutoBalance Web Platform",
        autobalanceRole: "Full Stack Developer",
        autobalanceDesc: "Web platform for automotive workshop with service, product and user management.",
        autobalanceItem1: "Frontend with HTML, CSS, Bootstrap, JS",
        autobalanceItem2: "Backend PHP + MySQL",
        autobalanceItem3: "Deploy in public environment",
        projectLink: "View project",
        tecnmDate: "2022 - 2027",
        tecnmTitle: "Informatic Engineering",
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
        footerTagline: "Transforming ideas into technological solutions.",
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

    // Update language button text (both mobile and desktop)
    const langText = document.getElementById('langText');
    const langTextDesktop = document.getElementById('langTextDesktop');
    const newText = lang === 'es' ? 'EN' : 'ES';
    if (langText) langText.textContent = newText;
    if (langTextDesktop) langTextDesktop.textContent = newText;

    // ========== NAVIGATION ==========
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks[0]) navLinks[0].textContent = t.navHome;
    if (navLinks[1]) navLinks[1].textContent = t.navAbout;
    if (navLinks[2]) navLinks[2].textContent = t.navSkills;
    if (navLinks[3]) navLinks[3].textContent = t.navExperience;
    if (navLinks[4]) navLinks[4].textContent = t.navCertifications;

    const btnContact = document.querySelector('.btn-contact');
    if (btnContact) btnContact.textContent = t.navContact;

    // ========== HERO SECTION ==========
    const heroAvailable = document.querySelector('.hero-badge span:last-child');
    if (heroAvailable) heroAvailable.textContent = t.heroAvailable;

    const heroGreeting = document.querySelector('.hero-greeting');
    if (heroGreeting) heroGreeting.textContent = t.heroGreeting;

    const heroName = document.querySelector('.hero-name');
    if (heroName) heroName.textContent = t.heroName;

    const heroRole = document.querySelector('.hero-role');
    if (heroRole) heroRole.textContent = t.heroRole;

    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) {
        // Preserve the <strong> tags
        const parts = t.heroDescription.split(/(<strong>.*?<\/strong>)/g);
        heroDesc.innerHTML = parts.join('');
    }

    // Hero buttons - preserve SVG
    const heroBtns = document.querySelectorAll('.hero-cta .btn');
    if (heroBtns[0]) {
        const svg = heroBtns[0].querySelector('svg');
        const span = heroBtns[0].querySelector('span');
        if (span) span.textContent = t.heroButtonProjects;
    }
    if (heroBtns[1]) {
        const svg = heroBtns[1].querySelector('svg');
        const span = heroBtns[1].querySelector('span');
        if (span) span.textContent = t.heroButtonEmail;
    }

    // Stats
    const statTexts = document.querySelectorAll('.stat-text');
    if (statTexts[0]) statTexts[0].textContent = t.statTech;
    if (statTexts[1]) statTexts[1].textContent = t.statProjects;
    if (statTexts[2]) statTexts[2].textContent = t.statYears;

    // ========== ABOUT SECTION ==========
    const aboutSection = document.getElementById('sobre-mi');
    if (aboutSection) {
        const tag = aboutSection.querySelector('.section-tag');
        const title = aboutSection.querySelector('.section-title');
        if (tag) tag.textContent = t.aboutTag;
        if (title) title.textContent = t.aboutTitle;
    }

    const aboutHeading = document.querySelector('.about-content h3');
    if (aboutHeading) aboutHeading.textContent = t.aboutHeading;

    const aboutParas = document.querySelectorAll('.about-content > p');
    if (aboutParas[0]) aboutParas[0].textContent = t.aboutDesc1;
    if (aboutParas[1]) aboutParas[1].textContent = t.aboutDesc2;

    // Info labels
    const infoLabels = document.querySelectorAll('.info-label');
    if (infoLabels[0]) infoLabels[0].textContent = t.infoEmail;
    if (infoLabels[1]) infoLabels[1].textContent = t.infoPhone;
    if (infoLabels[2]) infoLabels[2].textContent = t.infoLocation;
    if (infoLabels[3]) infoLabels[3].textContent = t.infoGithub;

    // About buttons - preserve SVG
    const aboutBtns = document.querySelectorAll('.about-actions .btn');
    if (aboutBtns[0]) {
        const svg = aboutBtns[0].querySelector('svg');
        aboutBtns[0].innerHTML = '';
        if (svg) aboutBtns[0].appendChild(svg);
        aboutBtns[0].appendChild(document.createTextNode(t.btnGithub));
    }
    if (aboutBtns[1]) {
        const svg = aboutBtns[1].querySelector('svg');
        aboutBtns[1].innerHTML = '';
        if (svg) aboutBtns[1].appendChild(svg);
        aboutBtns[1].appendChild(document.createTextNode(t.btnDownloadCV));
    }

    // Experience cards in about section
    const expCards = document.querySelectorAll('.about-cards .experience-card');
    if (expCards[0]) {
        expCards[0].querySelector('h4').textContent = t.cardRealExp;
        expCards[0].querySelector('p').textContent = t.cardRealExpDesc;
    }
    if (expCards[1]) {
        expCards[1].querySelector('h4').textContent = t.cardCerts;
        expCards[1].querySelector('p').textContent = t.cardCertsDesc;
    }
    if (expCards[2]) {
        expCards[2].querySelector('h4').textContent = t.cardFullStack;
        expCards[2].querySelector('p').textContent = t.cardFullStackDesc;
    }

    // ========== SKILLS SECTION ==========
    const skillsSection = document.getElementById('habilidades');
    if (skillsSection) {
        const tag = skillsSection.querySelector('.section-tag');
        const title = skillsSection.querySelector('.section-title');
        if (tag) tag.textContent = t.skillsTag;
        if (title) title.textContent = t.skillsTitle;
    }

    // Category titles - preserve SVG
    const categoryTitles = document.querySelectorAll('.category-title');
    if (categoryTitles[0]) {
        const svg = categoryTitles[0].querySelector('svg');
        categoryTitles[0].innerHTML = '';
        if (svg) categoryTitles[0].appendChild(svg);
        categoryTitles[0].appendChild(document.createTextNode(t.techSkills));
    }
    if (categoryTitles[1]) {
        const svg = categoryTitles[1].querySelector('svg');
        categoryTitles[1].innerHTML = '';
        if (svg) categoryTitles[1].appendChild(svg);
        categoryTitles[1].appendChild(document.createTextNode(t.softSkills));
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
    if (softSkillCards[4]) {
        softSkillCards[4].querySelector('h4').textContent = t.softAdaptability;
        softSkillCards[4].querySelector('p').textContent = t.softAdaptabilityDesc;
    }
    if (softSkillCards[5]) {
        softSkillCards[5].querySelector('h4').textContent = t.softTimeManagement;
        softSkillCards[5].querySelector('p').textContent = t.softTimeManagementDesc;
    }
    if (softSkillCards[6]) {
        softSkillCards[6].querySelector('h4').textContent = t.softProactivity;
        softSkillCards[6].querySelector('p').textContent = t.softProactivityDesc;
    }

    // ========== EXPERIENCE SECTION ==========
    const expSection = document.getElementById('experiencia');
    if (expSection) {
        const tag = expSection.querySelector('.section-tag');
        const title = expSection.querySelector('.section-title');
        if (tag) tag.textContent = t.expTag;
        if (title) title.textContent = t.expTitle;
    }

    // Experience category titles - preserve SVG
    const expCategoryTitles = document.querySelectorAll('.exp-category-title');
    if (expCategoryTitles[0]) {
        const svg = expCategoryTitles[0].querySelector('svg');
        expCategoryTitles[0].innerHTML = '';
        if (svg) expCategoryTitles[0].appendChild(svg);
        expCategoryTitles[0].appendChild(document.createTextNode(t.expProjects));
    }
    if (expCategoryTitles[1]) {
        const svg = expCategoryTitles[1].querySelector('svg');
        expCategoryTitles[1].innerHTML = '';
        if (svg) expCategoryTitles[1].appendChild(svg);
        expCategoryTitles[1].appendChild(document.createTextNode(t.expPersonal));
    }
    if (expCategoryTitles[2]) {
        const svg = expCategoryTitles[2].querySelector('svg');
        expCategoryTitles[2].innerHTML = '';
        if (svg) expCategoryTitles[2].appendChild(svg);
        expCategoryTitles[2].appendChild(document.createTextNode(t.expSchool));
    }
    if (expCategoryTitles[3]) {
        const svg = expCategoryTitles[3].querySelector('svg');
        expCategoryTitles[3].innerHTML = '';
        if (svg) expCategoryTitles[3].appendChild(svg);
        expCategoryTitles[3].appendChild(document.createTextNode(t.expEducation));
    }

    // Update toggle buttons text
    document.querySelectorAll('.btn-toggle-exp').forEach(button => {
        const targetId = button.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        const toggleText = button.querySelector('.toggle-text');

        if (toggleText && targetContent) {
            // Check current visibility state
            const isVisible = targetContent.style.display === 'grid';
            toggleText.textContent = isVisible ? t.btnHideProjects : t.btnShowProjects;
        }
    });

    // Project badges
    const projectBadges = document.querySelectorAll('.project-badge');
    if (projectBadges[0]) projectBadges[0].textContent = t.badgeReal;        // Teatro
    if (projectBadges[1]) projectBadges[1].textContent = t.badgePersonal;    // PADDI
    if (projectBadges[2]) projectBadges[2].textContent = t.badgePersonal;    // Qube
    if (projectBadges[3]) projectBadges[3].textContent = t.badgePersonal;    // FlashShare
    if (projectBadges[4]) projectBadges[4].textContent = t.badgeAcademic;    // Limón (visible)
    if (projectBadges[5]) projectBadges[5].textContent = t.badgeAcademic;    // POS
    if (projectBadges[6]) projectBadges[6].textContent = t.badgeAcademic;    // AutoBalance

    // Project cards
    const projectCards = document.querySelectorAll('.project-card');

    // Theater project (card 0)
    if (projectCards[0]) {
        projectCards[0].querySelector('h4').textContent = t.theaterTitle;
        projectCards[0].querySelector('.project-role').textContent = t.theaterRole;
        projectCards[0].querySelector('.project-desc').textContent = t.theaterDesc;
        const items = projectCards[0].querySelectorAll('.project-highlights li');
        if (items[0]) items[0].textContent = t.theaterItem1;
        if (items[1]) items[1].textContent = t.theaterItem2;
        if (items[2]) items[2].textContent = t.theaterItem3;
        if (items[3]) items[3].textContent = t.theaterItem4;
        if (items[4]) items[4].textContent = t.theaterItem5;
    }

    // PADDI project (card 1)
    if (projectCards[1]) {
        projectCards[1].querySelector('h4').textContent = t.paddiTitle;
        projectCards[1].querySelector('.project-role').textContent = t.paddiRole;
        projectCards[1].querySelector('.project-desc').textContent = t.paddiDesc;
        const items = projectCards[1].querySelectorAll('.project-highlights li');
        if (items[0]) items[0].textContent = t.paddiItem1;
        if (items[1]) items[1].textContent = t.paddiItem2;
        if (items[2]) items[2].textContent = t.paddiItem3;
        if (items[3]) items[3].textContent = t.paddiItem4;
        if (items[4]) items[4].textContent = t.paddiItem5;
        if (items[5]) items[5].textContent = t.paddiItem6;
    }

    // Qube project (card 2)
    if (projectCards[2]) {
        projectCards[2].querySelector('h4').textContent = t.qubeTitle;
        projectCards[2].querySelector('.project-role').textContent = t.qubeRole;
        projectCards[2].querySelector('.project-desc').textContent = t.qubeDesc;
        const items = projectCards[2].querySelectorAll('.project-highlights li');
        if (items[0]) items[0].textContent = t.qubeItem1;
        if (items[1]) items[1].textContent = t.qubeItem2;
        if (items[2]) items[2].textContent = t.qubeItem3;
        const link = projectCards[2].querySelector('.project-link');
        if (link) link.textContent = t.projectLink + ' →';
    }

    // FlashShare project (card 3)
    if (projectCards[3]) {
        projectCards[3].querySelector('h4').textContent = t.flashshareTitle;
        projectCards[3].querySelector('.project-role').textContent = t.flashshareRole;
        projectCards[3].querySelector('.project-desc').textContent = t.flashshareDesc;
        const items = projectCards[3].querySelectorAll('.project-highlights li');
        if (items[0]) items[0].textContent = t.flashshareItem1;
        if (items[1]) items[1].textContent = t.flashshareItem2;
        if (items[2]) items[2].textContent = t.flashshareItem3;
        if (items[3]) items[3].textContent = t.flashshareItem4;
        const link = projectCards[3].querySelector('.project-link');
        if (link) link.textContent = t.projectLink + ' →';
    }

    // LIMON project (card 4)
    if (projectCards[4]) {
        projectCards[4].querySelector('h4').textContent = t.limonTitle;
        projectCards[4].querySelector('.project-role').textContent = t.limonRole;
        projectCards[4].querySelector('.project-desc').textContent = t.limonDesc;
        const items = projectCards[4].querySelectorAll('.project-highlights li');
        if (items[0]) items[0].textContent = t.limonItem1;
        if (items[1]) items[1].textContent = t.limonItem2;
        if (items[2]) items[2].textContent = t.limonItem3;
        if (items[3]) items[3].textContent = t.limonItem4;
        if (items[4]) items[4].textContent = t.limonItem5;
    }

    // POS project (card 5)
    if (projectCards[5]) {
        projectCards[5].querySelector('h4').textContent = t.posTitle;
        projectCards[5].querySelector('.project-role').textContent = t.posRole;
        projectCards[5].querySelector('.project-desc').textContent = t.posDesc;
        const items = projectCards[5].querySelectorAll('.project-highlights li');
        if (items[0]) items[0].textContent = t.posItem1;
        if (items[1]) items[1].textContent = t.posItem2;
        if (items[2]) items[2].textContent = t.posItem3;
        if (items[3]) items[3].textContent = t.posItem4;
        if (items[4]) items[4].textContent = t.posItem5;
        if (items[5]) items[5].textContent = t.posItem6;
    }

    // AutoBalance project (card 6)
    if (projectCards[6]) {
        projectCards[6].querySelector('h4').textContent = t.autobalanceTitle;
        projectCards[6].querySelector('.project-role').textContent = t.autobalanceRole;
        projectCards[6].querySelector('.project-desc').textContent = t.autobalanceDesc;
        const items = projectCards[6].querySelectorAll('.project-highlights li');
        if (items[0]) items[0].textContent = t.autobalanceItem1;
        if (items[1]) items[1].textContent = t.autobalanceItem2;
        if (items[2]) items[2].textContent = t.autobalanceItem3;
        const link = projectCards[6].querySelector('.project-link');
        if (link) link.textContent = t.projectLink + ' →';
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
    const certsSection = document.getElementById('certificaciones');
    if (certsSection) {
        const tag = certsSection.querySelector('.section-tag');
        const title = certsSection.querySelector('.section-title');
        if (tag) tag.textContent = t.certsTag;
        if (title) title.textContent = t.certsTitle;
    }

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
    if (footerBottom) footerBottom.textContent = `© 2026 Ulises Castillo Zamora. ${t.footerRights}`;
}

// Language toggle
document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    translatePage(currentLang);
});

// Language toggle desktop
document.getElementById('langToggleDesktop').addEventListener('click', () => {
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

document.querySelectorAll('.stat-number').forEach(stat => {
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

// Close mobile menu when any link inside is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
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

// ==================== TOGGLE EXPERIENCE SECTIONS ====================
document.querySelectorAll('.btn-toggle-exp').forEach(button => {
    button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        const toggleText = this.querySelector('.toggle-text');
        const toggleIcon = this.querySelector('.toggle-icon');
        const isVisible = targetContent.style.display !== 'none';

        if (isVisible) {
            // Ocultar
            targetContent.style.display = 'none';
            toggleIcon.innerHTML = '<polyline points="6 9 12 15 18 9"></polyline>';
            const t = translations[currentLang];
            toggleText.textContent = t.btnShowProjects || 'Ver proyectos';
        } else {
            // Mostrar
            targetContent.style.display = 'grid';
            toggleIcon.innerHTML = '<polyline points="18 15 12 9 6 15"></polyline>';
            const t = translations[currentLang];
            toggleText.textContent = t.btnHideProjects || 'Ocultar proyectos';
        }
    });
});

console.log('🚀 Portfolio loaded successfully!');

// ==================== MODO OSCURO ====================
// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const themeToggleDesktop = document.getElementById('themeToggleDesktop');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Get saved theme from localStorage or default to light
function getSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return 'light'; // Siempre inicia en modo claro
}

// Apply theme to document
function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
}

// Toggle theme function
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
}

// Initialize theme on page load
let currentTheme = getSavedTheme();
applyTheme(currentTheme);

// Theme toggle event listeners (both mobile and desktop)
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}
if (themeToggleDesktop) {
    themeToggleDesktop.addEventListener('click', toggleTheme);
}

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', (e) => {
    // Only auto-switch if user hasn't manually set a preference
    if (!localStorage.getItem('theme')) {
        currentTheme = e.matches ? 'dark' : 'light';
        applyTheme(currentTheme);
    }
});

console.log('🌙 Theme system initialized!');
