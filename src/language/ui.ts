export const languages = {
  spanish: 'Español',
  english: 'English',
  es: 'Español',
  en: 'English'
} as const;

export const defaultLang = 'spanish';

const uiBase = {
  spanish: {
    // Navegación
    aPresentationText: 'Presentación',
    aSkillsText: 'Habilidades',
    aExperienceText: 'Experiencia',
    aStudiesText: 'Formación',
    aProjectsText: 'Proyectos',
    aContactText: 'Contacto',
    aFilesText: 'Anexos',

    // Hero Section
    heroBadge: 'Desarrollador y Artista Digital',
    heroFirstName: 'Carlos',
    heroLastName: 'de la Peña',
    heroRole: 'Full Stack Engineer',
    descriptionText: 'Ingeniero de sistemas enfocado en el desarrollo de soluciones web escalables y experiencias digitales. Con sólida experiencia técnica tanto en el desarrollo Front-end como Back-end, disponible para colaborar en equipos de alto rendimiento o proyectos independientes.',
    heroStatusLabel: 'ESTADO',
    heroStatusValue: 'Disponible para Proyectos',

    // Skills
    skillsTitle: 'HABILIDADES TÉCNICAS',
    skillsText: 'Dominio de stack moderno web, bases de datos relacionales/NoSQL, patrones de diseño, arquitectura limpia y despliegue continuo en la nube.',

    // Experience
    experienceTitle: 'EXPERIENCIA PROFESIONAL',
    experienceText: 'Trayectoria en el desarrollo de software empresarial, proyectos independientes y arquitectura de aplicaciones web.',

    // Studies
    aStudiesTitle: 'EDUCACIÓN & FORMACIÓN',
    studiesText: 'Bases académicas e ingenieriles que respaldan la calidad y estructura de mi desarrollo de software.',
    degreeTitle: 'Ingeniería de Sistemas',
    institutionName: 'Universidad del Magdalena',
    degreePeriod: '2019 - 2024',
    degreeStatus: 'Graduado',
    degreeDescription: 'Formación integral enfocada en arquitectura y ciclo de vida de software, ingeniería de requerimientos, estructuras de datos avanzadas, optimización de algoritmos y gestión de bases de datos relacionales.',
    degreeBadge: 'Título Profesional',

    // Projects
    projectsTitle: 'PROYECTOS DESTACADOS',
    projectsText: 'Haz clic en cualquier proyecto para explorar sus características técnicas, arquitectura y enlaces en vivo.',
    projectBadgeDetails: 'Ver Detalles',
    modalKeyAspects: '// Aspectos Clave & Arquitectura',
    modalStackUsed: '// Stack Utilizado',
    modalLiveDemo: 'Ver Proyecto Live',
    modalGithubRepo: 'GitHub Repository',

    servicesTitle: 'SERVICIOS WEB',
    servicesSubtitle: 'Soluciones de desarrollo web a medida, diseñadas para transformar ideas en plataformas escalables, rápidas y optimizadas para negocios.',

    // Servicio 1
    service1Title: 'Desarrollo Web Apps & SaaS',
    service1Desc: 'Plataformas web complejas, paneles administrativos y sistemas de gestión a medida con lógica de negocio avanzada y alta escalabilidad.',
    service1Feature1: 'Arquitectura limpia y código mantenible',
    service1Feature2: 'Modelado e integración de bases de datos',
    service1Feature3: 'Autenticación segura y roles de usuario',
    service1Feature4: 'Integración de APIs y servicios de terceros',

    // Servicio 2
    service2Title: 'Sitios Web & Landing Pages',
    service2Desc: 'Sitios corporativos y portafolios ultrarrápidos, optimizados para conversión, retención de usuarios y posicionamiento orgánico en motores de búsqueda.',
    service2Feature1: 'Carga instantánea con renderizado estático',
    service2Feature2: 'SEO técnico y metadatos Open Graph',
    service2Feature3: 'Diseño 100% responsivo y adaptable',
    service2Feature4: 'Animaciones fluidas e interfaz moderna',

    // Servicio 3
    service3Title: 'Modernización & Refactoring Web',
    service3Desc: 'Transformación de plataformas lentas o desactualizadas en software moderno, eficiente y fácil de mantener.',
    service3Feature1: 'Auditoría y optimización de rendimiento',
    service3Feature2: 'Migración a stacks modernos de JS/TS',
    service3Feature3: 'Mejora en puntajes de Google Lighthouse',
    service3Feature4: 'Corrección de responsive y accesibilidad',

    // Files / HV
    filesBadge: '// Credenciales & Trayectoria',
    filesTitle: '¿Quieres evaluar mi perfil completo?',
    filesDescription: 'Descarga mi curriculum vitae para revisar a detalle mi experiencia técnica, stack tecnológico y formación profesional.',
    downloadCvButton: 'Descargar CV',
    curriculumPath: '/CarlosDeLaPeña_HV.pdf',

    // Contact
    contactTitle: '¿Te llamó la atención?',
    contactSubtitle: 'Cuéntame sobre tu proyecto o solicita una consulta. Estoy listo para convertir tus ideas en software de alto impacto.',
    formName: 'Tu Nombre',
    formNamePlaceholder: 'Ej. Alexander Pierce',
    formEmail: 'Tu Email',
    formEmailPlaceholder: 'correo@ejemplo.com',
    formMessage: 'Detalles del Proyecto o Consulta',
    formMessagePlaceholder: 'Cuéntame sobre las funcionalidades, objetivos o tiempos de tu idea...',
    sendButton: 'Enviar Consulta',
    sendMessage: 'Mensaje enviado exitosamente',
    sendErrorMessage: 'Ocurrió un error al enviar tu mensaje, por favor inténtalo nuevamente',

    // Redes rápidas
    contactWhatsappLabel: 'Chat Directo'
  },
  english: {
    // Navigation
    aPresentationText: 'Presentation',
    aSkillsText: 'Skills',
    aExperienceText: 'Experience',
    aStudiesText: 'Education',
    aProjectsText: 'Projects',
    aContactText: 'Contact',
    aFilesText: 'Files',

    // Hero Section
    heroBadge: 'Developer & Digital Artist',
    heroFirstName: 'Carlos',
    heroLastName: 'de la Peña',
    heroRole: 'Full Stack Engineer',
    descriptionText: 'Systems engineer focused on developing scalable web solutions and high-impact digital experiences. Possessing strong technical experience in both Front-end and Back-end development, open to teamwork or freelance web projects.',
    heroStatusLabel: 'STATUS',
    heroStatusValue: 'Available for Projects',

    // Skills
    skillsTitle: 'TECHNICAL SKILLS',
    skillsText: 'Proficiency in modern web stacks, relational/NoSQL databases, design patterns, clean architecture, and continuous cloud deployment.',

    // Experience
    experienceTitle: 'PROFESSIONAL EXPERIENCE',
    experienceText: 'Track record in enterprise software development, independent projects, and web application architecture.',

    // Studies
    aStudiesTitle: 'EDUCATION & TRAINING',
    studiesText: 'Academic and engineering background supporting the software development structure and code quality.',
    degreeTitle: 'Systems Engineering',
    institutionName: 'University of Magdalena',
    degreePeriod: '2019 - 2024',
    degreeStatus: 'Graduated',
    degreeDescription: 'Comprehensive training focused on software architecture and lifecycle, requirements engineering, advanced data structures, algorithm optimization, and relational database management.',
    degreeBadge: 'Professional Degree',

    // Projects
    projectsTitle: 'FEATURED PROJECTS',
    projectsText: 'Click on any project to explore its technical specs, architecture, and live demo links.',
    projectBadgeDetails: 'View Details',
    modalKeyAspects: '// Key Highlights & Architecture',
    modalStackUsed: '// Tech Stack Used',
    modalLiveDemo: 'View Live Project',
    modalGithubRepo: 'GitHub Repository',

    servicesTitle: 'WEB SERVICES',
    servicesSubtitle: 'Tailored web development solutions designed to turn ideas into scalable, fast, and business-optimized platforms.',

    // Service 1
    service1Title: 'Web Apps & SaaS Development',
    service1Desc: 'Complex web platforms, admin dashboards, and custom management systems with advanced business logic and high scalability.',
    service1Feature1: 'Clean architecture and maintainable code',
    service1Feature2: 'Database modeling and integration',
    service1Feature3: 'Secure authentication and user roles',
    service1Feature4: 'API and third-party service integration',

    // Service 2
    service2Title: 'Websites & Landing Pages',
    service2Desc: 'Ultra-fast corporate websites and portfolios optimized for conversion, user retention, and search engine organic ranking.',
    service2Feature1: 'Instant load with static rendering',
    service2Feature2: 'Technical SEO & Open Graph metadata',
    service2Feature3: '100% responsive and adaptive design',
    service2Feature4: 'Smooth animations & modern UI',

    // Service 3
    service3Title: 'Web Modernization & Refactoring',
    service3Desc: 'Transforming slow or legacy platforms into modern, efficient, and easily maintainable software.',
    service3Feature1: 'Performance auditing and optimization',
    service3Feature2: 'Migration to modern JS/TS stacks',
    service3Feature3: 'Google Lighthouse score improvement',
    service3Feature4: 'Responsive and accessibility fixes',

    // Files / CV
    filesBadge: '// Credentials & Track Record',
    filesTitle: 'Want to review my full profile?',
    filesDescription: 'Download my resume to review my technical experience, technology stack, and academic background in detail.',
    downloadCvButton: 'Download CV',
    curriculumPath: '/CarlosDeLaPeña_CV.pdf',

    // Contact
    contactTitle: 'Interested in working together?',
    contactSubtitle: 'Tell me about your project or request a consultation. I am ready to turn your ideas into high-impact software.',
    formName: 'Your Name',
    formNamePlaceholder: 'e.g. Alexander Pierce',
    formEmail: 'Your Email',
    formEmailPlaceholder: 'email@example.com',
    formMessage: 'Project Details or Inquiry',
    formMessagePlaceholder: 'Tell me about features, targets, or timelines for your idea...',
    sendButton: 'Send Message',
    sendMessage: 'Message sent successfully',
    sendErrorMessage: 'An error occurred while sending your message, please try again',

    // Quick Socials
    contactWhatsappLabel: 'Direct Chat'
  }
} as const;

export const ui = {
  ...uiBase,
  es: uiBase.spanish,
  en: uiBase.english,
};

export type TranslationKeys = keyof typeof ui.spanish;
