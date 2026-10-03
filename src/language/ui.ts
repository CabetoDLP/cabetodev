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
    aServicesText: 'Servicios',
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

    // Servicios
    servicesTitle: "Catálogo de Servicios & Tarifas",
    servicesSubtitle: "Soluciones de software y desarrollo web a la medida enfocadas en rendimiento, escalabilidad y resultados comerciales.",
    idealClient: "Cliente ideal:",
    estTime: "Tiempo estimado:",
    retainersTitle: "Planes de Mantenimiento Recurrente (Retainers)",
    retainersSubtitle: "Garantiza la disponibilidad, seguridad, actualizaciones y soporte técnico continuo para tu proyecto.",
    retainerPlan: "Plan",
    retainerPrice: "Precio Mensual",
    retainerIncludes: "Qué Incluye",
    retainerAssociated: "Servicio Asociado",

    // Servicio 1
    s1Title: "Landing Page Común",
    s1Desc: "Desarrollo de una sola página orientado a validar un producto, servicio o campaña específica con un diseño responsivo, limpio y de carga inmediata.",
    s1Price: "$300 – $450 USD",
    s1Time: "10–15 hrs est.",
    s1Ideal: "Solopreneurs, consultores o startups pequeñas con presupuesto ajustado.",
    s1F1: "Estructura responsiva de 1 vista (Hero, Beneficios, Servicios y Contacto)",
    s1F2: "Formulario de contacto directo (EmailJS / Resend / Webhook)",
    s1F3: "Botón flotante directo a WhatsApp Business",
    s1F4: "SEO Técnico Inicial (Metadatos, Open Graph, HTML semántico)",
    s1F5: "Optimización avanzada de velocidad y adaptabilidad móvil",

    // Servicio 2
    s2Title: "Sitio Web Corporativo (Código Puro)",
    s2Desc: "Páginas institucionales estáticas desarrolladas en código puro. Al no requerir bases de datos ni CMS, ofrecen velocidad extrema (PageSpeed 90-100) y máxima seguridad.",
    s2Price: "$800 – $1,200 USD",
    s2Time: "25–35 hrs est.",
    s2Ideal: "PyMEs, firmas profesionales y agencias B2B que buscan una presencia digital sólida sin mantenimiento de CMS.",
    s2F1: "5 a 8 Vistas / Rutas estáticas (Inicio, Nosotros, Servicios, FAQ, Contacto, etc.)",
    s2F2: "Agendamiento de Citas: Integración con widget de Cal.com o Calendly",
    s2F3: "Módulo de Chat: Widget flotante de atención (WhatsApp / Tidio / Crisp)",
    s2F4: "Optimización avanzada de Core Web Vitals y rendimiento móvil",

    // Servicio 3
    s3Title: "E-Commerce Tradicional",
    s3Desc: "Plataforma de comercio electrónico diseñada para una sola marca que busca vender sus productos directamente al consumidor sin comisiones de terceros.",
    s3Price: "$2,200 – $2,800 USD",
    s3Time: "70–90 hrs est.",
    s3Ideal: "Marcas D2C (Direct-to-Consumer), tiendas físicas en proceso de digitalización o negocios con catálogo propio.",
    s3F1: "Catálogo unificado de productos con filtros, categorías y búsqueda rápida",
    s3F2: "Carrito de compras y pasarelas de pago (Stripe, PayPal, MercadoPago)",
    s3F3: "Panel de administración central (gestión de catálogo, pedidos e inventario)",
    s3F4: "Autenticación de usuarios, perfiles y registro de clientes",

    // Servicio 4
    s4Title: "SaaS / Web App Custom (MVP)",
    s4Desc: "Aplicaciones web Full-Stack a la medida para digitalizar procesos de negocio, herramientas internas o lanzar un producto de software por suscripción.",
    s4Price: "$3,500 – $6,000+ USD",
    s4Time: "120–180+ hrs est.",
    s4Ideal: "Startups tecnológicas, fundadores en fase MVP o empresas que necesitan automatizar operaciones complejas.",
    s4F1: "Arquitectura Full-Stack escalable (Frontend + API Backend + Base de Datos)",
    s4F2: "Autenticación segura (JWT, OAuth, gestión de sesiones y roles)",
    s4F3: "Dashboard administrativo interactivo con métricas en tiempo real",
    s4F4: "Integración de APIs de terceros, Sockets y suscripciones (Stripe Billing)",

    // Retainers
    r1Name: "Micro Care",
    r1Price: "$50 – $80 USD / mes",
    r1Desc: "Hosting administrado, certificado SSL, monitoreo de servidor y hasta 45 min/mes para ajustes menores de texto o imágenes.",
    r1Service: "Landing Page Común",

    r2Name: "Basic Support",
    r2Price: "$150 – $250 USD / mes",
    r2Desc: "Hosting administrado, backups, parches de seguridad y hasta 2 horas/mes para cambios de contenido en código o soporte directo.",
    r2Service: "Sitio Web Corporativo",

    r3Name: "Growth & Pro",
    r3Price: "$400 – $700 USD / mes",
    r3Desc: "Monitoreo prioritario (< 24 hrs) y hasta 10 horas/mes para desarrollo de nuevas funciones, optimización y mantenimiento activo.",
    r3Service: "E-Commerce / SaaS Custom",

    // Subtítulos / Notas de Consulta Gratuita y Meet
    freeConsultationBadge: "Consulta Inicial Gratuita",
    meetingInfo: "Reuniones vía Google Meet",
    contactTitle: '¿Te llamó la atención?',
    contactSubtitle: 'Cuéntame sobre tu proyecto o agenda una consulta gratuita. Las reuniones se realizan vía Google Meet para evaluar tus requerimientos.',
    formName: 'Tu Nombre',
    formNamePlaceholder: 'Ej. Alexander Pierce',
    formEmail: 'Tu Email',
    formEmailPlaceholder: 'correo@ejemplo.com',
    formMessage: 'Detalles del Proyecto o Consulta',
    formMessagePlaceholder: 'Cuéntame sobre las funcionalidades, objetivos o tiempos de tu idea...',
    sendButton: 'Enviar Consulta',
    sendMessage: 'Mensaje enviado exitosamente',
    sendErrorMessage: 'Ocurrió un error al enviar tu mensaje, por favor inténtalo nuevamente',
    modalSuccessTitle: '// ¡Mensaje Enviado!',
    modalErrorTitle: '// Error al Enviar',
    modalConfirmBtn: 'Aceptar',

    // Files / HV
    filesBadge: 'Credenciales & Trayectoria',
    filesTitle: '¿Quieres evaluar mi perfil completo?',
    filesDescription: 'Descarga mi curriculum vitae para revisar a detalle mi experiencia técnica, stack tecnológico y formación profesional.',
    downloadCvButton: 'Descargar CV',
    curriculumPath: '/CarlosDeLaPeña_HV.pdf',

    // Redes rápidas
    contactWhatsappLabel: 'Chat Directo',

    botInitialMessage: "👋 ¡Hola! Soy el asistente virtual de Carlos. ¿Tienes preguntas sobre sus proyectos, habilidades o experiencia?",
    botPlaceholder: "Escribe un mensaje...",
    botSendText: "Enviar",
    botTyping: "Escribiendo...",
    botError: "Ocurrió un error al conectar con el asistente. Inténtalo nuevamente.",
    botAriaOpen: "Abrir Asistente AI",
    botAriaClose: "Cerrar chat"
  },
  english: {
    // Navigation
    aPresentationText: 'Presentation',
    aSkillsText: 'Skills',
    aExperienceText: 'Experience',
    aStudiesText: 'Education',
    aProjectsText: 'Projects',
    aServicesText: 'Services',
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

    // Services
    servicesTitle: "Service Catalog & Pricing",
    servicesSubtitle: "Custom software and web development solutions focused on performance, scalability, and business results.",
    idealClient: "Ideal Client:",
    estTime: "Est. Time:",
    retainersTitle: "Recurring Maintenance Plans (Retainers)",
    retainersSubtitle: "Ensure continuous availability, security, updates, and technical support for your project.",
    retainerPlan: "Plan",
    retainerPrice: "Monthly Price",
    retainerIncludes: "What's Included",
    retainerAssociated: "Associated Service",

    s1Title: "Standard Landing Page",
    s1Desc: "Single-page development tailored to validate a product, service, or campaign with a responsive, fast-loading design.",
    s1Price: "$300 – $450 USD",
    s1Time: "10–15 hrs est.",
    s1Ideal: "Solopreneurs, consultants, or small startups with a tight budget.",
    s1F1: "Responsive 1-page structure (Hero, Benefits, Services, Contact)",
    s1F2: "Direct contact form (EmailJS / Resend / Webhook)",
    s1F3: "Floating WhatsApp Business button",
    s1F4: "Initial Technical SEO (Metadata, Open Graph, semantic HTML)",
    s1F5: "Speed optimization and mobile responsiveness",

    s2Title: "Corporate Website (Pure Code)",
    s2Desc: "Static institutional sites built in pure code. No databases or CMS means extreme speed (PageSpeed 90-100) and top security.",
    s2Price: "$800 – $1,200 USD",
    s2Time: "25–35 hrs est.",
    s2Ideal: "SMEs, professional firms, and B2B agencies seeking a solid digital presence without CMS overhead.",
    s2F1: "5 to 8 Static views/routes (Home, About, Services, FAQ, Contact, etc.)",
    s2F2: "Appointment Scheduling: Cal.com or Calendly widget integration",
    s2F3: "Chat Module: Floating customer support widget (WhatsApp / Tidio / Crisp)",
    s2F4: "Advanced Core Web Vitals and mobile performance tuning",

    s3Title: "Traditional E-Commerce",
    s3Desc: "E-commerce platform designed for a single brand looking to sell products directly to consumers without third-party fees.",
    s3Price: "$2,200 – $2,800 USD",
    s3Time: "70–90 hrs est.",
    s3Ideal: "D2C brands, physical stores transitioning online, or business with proprietary product catalogs.",
    s3F1: "Unified product catalog with filters, categories, and fast search",
    s3F2: "Shopping cart & secure checkout (Stripe, PayPal, MercadoPago)",
    s3F3: "Central admin dashboard (catalog, order, and inventory management)",
    s3F4: "User authentication, customer profiles, and sign-ups",

    s4Title: "Custom SaaS / Web App (MVP)",
    s4Desc: "Custom Full-Stack web apps built to digitize business workflows, internal tools, or launch subscription software products.",
    s4Price: "$3,500 – $6,000+ USD",
    s4Time: "120–180+ hrs est.",
    s4Ideal: "Tech startups, founders in MVP stage, or enterprises needing complex automation.",
    s4F1: "Scalable Full-Stack architecture (Frontend + Backend API + Database)",
    s4F2: "Secure Auth (JWT, OAuth, session & role management)",
    s4F3: "Interactive admin dashboard with real-time metrics",
    s4F4: "Third-party APIs, Sockets, and recurring billing (Stripe Billing)",

    r1Name: "Micro Care",
    r1Price: "$50 – $80 USD / mo",
    r1Desc: "Managed hosting, SSL, server monitoring, and up to 45 min/mo for minor text or image updates.",
    r1Service: "Standard Landing Page",

    r2Name: "Basic Support",
    r2Price: "$150 – $250 USD / mo",
    r2Desc: "Managed hosting, backups, security patches, and up to 2 hours/mo for code content updates.",
    r2Service: "Corporate Website",

    r3Name: "Growth & Pro",
    r3Price: "$400 – $700 USD / mo",
    r3Desc: "Priority monitoring (< 24 hrs) and up to 10 hours/mo for new features and active maintenance.",
    r3Service: "E-Commerce / Custom SaaS",

    // Consultation & Meet Notes
    freeConsultationBadge: "Free Initial Consultation",
    meetingInfo: "Meetings via Google Meet",
    contactTitle: 'Interested in working together?',
    contactSubtitle: 'Tell me about your project or schedule a free consultation. Meetings are conducted via Google Meet to review your requirements.',
    formName: 'Your Name',
    formNamePlaceholder: 'e.g. Alexander Pierce',
    formEmail: 'Your Email',
    formEmailPlaceholder: 'email@example.com',
    formMessage: 'Project Details or Inquiry',
    formMessagePlaceholder: 'Tell me about features, targets, or timelines for your idea...',
    sendButton: 'Send Message',
    sendMessage: 'Message sent successfully',
    sendErrorMessage: 'An error occurred while sending your message, please try again',
    modalSuccessTitle: '// Message Sent!',
    modalErrorTitle: '// Error Sending',
    modalConfirmBtn: 'OK',

    // Files / CV
    filesBadge: 'Credentials & Track Record',
    filesTitle: 'Want to review my full profile?',
    filesDescription: 'Download my resume to review my technical experience, technology stack, and academic background in detail.',
    downloadCvButton: 'Download CV',
    curriculumPath: '/CarlosDeLaPeña_CV.pdf',

    botInitialMessage: "👋 Hi! I'm Carlos's virtual assistant. Do you have any questions about his projects, skills or experience?",
    botPlaceholder: "Write a message...",
    botSendText: "Send",
    botTyping: "Typing...",
    botError: "An error occurred while connecting to the assistant. Please try again.",
    botAriaOpen: "Open AI Assistant",
    botAriaClose: "Close chat",

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