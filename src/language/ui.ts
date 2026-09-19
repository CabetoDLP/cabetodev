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
    heroBadge: 'Full Stack Engineer & Digital Artist',
    heroFirstName: 'Carlos',
    heroLastName: 'de la Peña',
    heroRole: 'Full Stack Developer',
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
    heroBadge: 'Full Stack Engineer & Digital Artist',
    heroFirstName: 'Carlos',
    heroLastName: 'de la Peña',
    heroRole: 'Full Stack Developer',
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
