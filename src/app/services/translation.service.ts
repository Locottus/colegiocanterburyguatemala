import { Injectable, signal, computed } from '@angular/core';

export type Language = 'es' | 'en' | 'fr' | 'pt' | 'de';

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translations: { [key: string]: any } = {};
  private currentLanguage = signal<Language>('es');

  availableLanguages: LanguageOption[] = [
    { code: 'es', name: 'Español', flag: '/flags/es.svg' },
    { code: 'en', name: 'English', flag: '/flags/en.svg' },
    { code: 'fr', name: 'Français', flag: '/flags/fr.svg' },
    { code: 'pt', name: 'Português', flag: '/flags/pt.svg' },
    { code: 'de', name: 'Deutsch', flag: '/flags/de.svg' }
  ];

  currentLang = computed(() => this.currentLanguage());

  constructor() {
    this.loadTranslations();
    // Cargar idioma guardado o usar el del navegador
    const savedLang = localStorage.getItem('preferred-language') as Language;
    if (savedLang && this.isValidLanguage(savedLang)) {
      this.currentLanguage.set(savedLang);
    } else {
      const browserLang = this.getBrowserLanguage();
      this.currentLanguage.set(browserLang);
    }
  }

  private getBrowserLanguage(): Language {
    const browserLang = navigator.language.split('-')[0];
    return this.isValidLanguage(browserLang as Language) ? browserLang as Language : 'es';
  }

  private isValidLanguage(lang: string): lang is Language {
    return ['es', 'en', 'fr', 'pt', 'de'].includes(lang);
  }

  private loadTranslations(): void {
    // Español
    this.translations['es'] = {
      nav: {
        home: 'Inicio',
        about: 'Nosotros',
        levels: 'Niveles',
        contact: 'Contacto'
      },
      hero: {
        title: 'Bienvenidos a Colegio Episcopal Canterbury Villanovano',
        subtitle: 'Institución educativa comprometida con la excelencia académica y la formación integral de nuestros estudiantes en Villa Nueva, Guatemala',
        knowMore: 'Conocer Más',
        ourLevels: 'Nuestros Niveles'
      },
      institutional: {
        aboutUs: 'Sobre Nosotros',
        aboutUsTitle: 'Colegio Episcopal Canterbury Villanovano',
        aboutUsText: 'Somos una institución educativa comprometida con la excelencia académica y la formación integral de nuestros estudiantes. Ubicados en Villa Nueva, Guatemala, ofrecemos una educación de calidad basada en valores cristianos y principios episcopales.',
        mission: 'Misión',
        missionText: 'Somos una institución educativa cristiana comprometida con la formación integral de niños, niñas y jóvenes en los niveles de preprimaria, primaria, básicos y diversificado. Fundamentamos nuestro quehacer educativo en los principios y valores de la fe cristiana, promoviendo una educación basada en el amor, la verdad, la justicia, el respeto y la responsabilidad. Orientamos nuestros esfuerzos hacia la excelencia académica mediante una propuesta pedagógica participativa, estructurada y actualizada, que integra el desarrollo del pensamiento crítico, el dominio de competencias científicas y tecnológicas, y la formación moral y espiritual de nuestros estudiantes, preparándolos para enfrentar con madurez y liderazgo los desafíos del mundo contemporáneo.\n\nValores Institucionales\nEn coherencia con nuestra identidad cristiana y nuestro compromiso con la formación integral, promovemos los siguientes valores como fundamento de nuestra comunidad educativa:\nAmor: Principio esencial de la fe cristiana que orienta nuestras relaciones, promoviendo servicio, empatía y respeto por la dignidad humana.\nHonestidad: Actuar con transparencia, coherencia y compromiso con la verdad en cada acción.\nJusticia: Garantizar igualdad de oportunidades y actuar recordando el bien común y la dignidad de cada persona.\nRespeto: Reconocer y valorar la diversidad, fomentando una convivencia armónica y democrática.\nPaz: Construir relaciones basadas en la unidad, el diálogo y la responsabilidad compartida.\nSolidaridad: Servir y colaborar activamente en beneficio de los demás y de la comunidad.\nResponsabilidad: Cumplir con compromiso los deberes asumidos, manteniendo fidelidad a nuestros principios institucionales.\nDisciplina: Actuar con orden, constancia y respeto por el tiempo propio y ajeno.\nHumildad: Reconocer nuestras fortalezas y limitaciones, manteniendo apertura al aprendizaje continuo.\nPerseverancia y Laboriosidad: Esforzarnos con dedicación y constancia para alcanzar metas académicas y personales.\nBondad y Alegría: Vivir con actitud positiva, practicando el bien y reflejando esperanza en nuestro quehacer diario.',
        vision: 'Visión',
        visionText: 'Consolidarnos como una institución educativa de reconocido prestigio, distinguida por su excelencia académica y por la formación integral de personas con sólidos principios cristianos, capaces de liderar con ética, compromiso y responsabilidad en los ámbitos científico, social, cultural y deportivo, contribuyendo de manera significativa a la transformación de la sociedad.',
        values: 'Valores',
        valuesText: 'En coherencia con nuestra identidad cristiana y nuestro compromiso con la formación integral, promovemos los siguientes valores como fundamento de nuestra comunidad educativa:\nAmor: Principio esencial de la fe cristiana que orienta nuestras relaciones, promoviendo servicio, empatía y respeto por la dignidad humana.\nHonestidad: Actuar con transparencia, coherencia y compromiso con la verdad en cada acción.\nJusticia: Garantizar igualdad de oportunidades y actuar recordando el bien común y la dignidad de cada persona.\nRespeto: Reconocer y valorar la diversidad, fomentando una convivencia armónica y democrática.\nPaz: Construir relaciones basadas en la unidad, el diálogo y la responsabilidad compartida.\nSolidaridad: Servir y colaborar activamente en beneficio de los demás y de la comunidad.\nResponsabilidad: Cumplir con compromiso los deberes asumidos, manteniendo fidelidad a nuestros principios institucionales.\nDisciplina: Actuar con orden, constancia y respeto por el tiempo propio y ajeno.\nHumildad: Reconocer nuestras fortalezas y limitaciones, manteniendo apertura al aprendizaje continuo.\nPerseverancia y Laboriosidad: Esforzarnos con dedicación y constancia para alcanzar metas académicas y personales.\nBondad y Alegría: Vivir con actitud positiva, practicando el bien y reflejando esperanza en nuestro quehacer diario.'
      },
      educationalLevels: {
        title: 'Nuestros Niveles Educativos',
        subtitle: 'Ofrecemos educación integral desde párvulos hasta diversificado',
        preschool: 'Párvulos',
        preschoolAges: '4-6 años',
        preschoolDesc: 'Nivel inicial con enfoque en desarrollo integral',
        preschoolFeatures: ['Estimulación temprana', 'Desarrollo psicomotor', 'Juegos educativos'],
        primary: 'Primaria',
        primaryAges: '7-12 años',
        primaryDesc: 'Educación básica con enfoque en habilidades fundamentales',
        primaryFeatures: ['Matemáticas y Ciencias', 'Desarrollo de lectoescritura', 'Educación Física y Artes'],
        secondary: 'Básicos',
        secondaryAges: '13-15 años',
        secondaryDesc: 'Educación media con formación académica sólida',
        secondaryFeatures: ['Ciencias y Tecnología', 'Idiomas extranjeros', 'Preparación para diversificado'],
        highschool: 'Diversificado',
        highschoolAges: '16-18 años',
        highschoolDesc: 'Preparación universitaria con especialidades',
        highschoolFeatures: ['Preparación universitaria', 'Especialidades técnicas', 'Formación profesional'],
        ctaTitle: '¿Listo para inscribirte?',
        ctaText: 'Únete a nuestra comunidad educativa y brinda a tu hijo(a) la mejor educación',
        enrollNow: 'Inscribirme Ahora',
        requestInfo: 'Solicitar Info',
        requestInfoLabel: 'Solicitar más información'
      },
      news: {
        title: 'Noticias y Eventos',
        subtitle: 'Mantente informado sobre las últimas actividades del colegio',
        news: 'Noticia',
        event: 'Evento',
        readMore: 'Leer más',
        loading: 'Cargando eventos...'
      },
      carousel: {
        title: 'Galería de Imágenes',
        subtitle: 'Descubre nuestras instalaciones y momentos especiales',
        loading: 'Cargando galería...'
      },
      footer: {
        contact: 'Contacto',
        address: 'Dirección',
        addressText: 'Villa Nueva, Guatemala',
        phone: 'Teléfono',
        email: 'Correo',
        followUs: 'Síguenos',
        quickLinks: 'Enlaces Rápidos',
        allRightsReserved: 'Todos los derechos reservados.',
        schedule: 'Horarios',
        classes: 'Clases',
        mondayToFriday: 'Lunes a Viernes',
        parentsAttention: 'Atención Padres',
        coordination: 'Coordinación',
        administration: 'Administración',
        backToTop: 'Volver arriba'
      },
      features: {
        bilingual: 'Educación bilingüe de calidad',
        facilities: 'Instalaciones modernas y seguras',
        teachers: 'Personal docente calificado',
        technology: 'Tecnología educativa avanzada',
        extracurricular: 'Actividades extracurriculares',
        personalized: 'Atención personalizada',
        values: 'Valores cristianos',
        comprehensive: 'Formación integral'
      }
    };

    // English
    this.translations['en'] = {
      nav: {
        home: 'Home',
        about: 'About',
        levels: 'Levels',
        contact: 'Contact'
      },
      hero: {
        title: 'Welcome to Canterbury Villanovano Episcopal School',
        subtitle: 'Educational institution committed to academic excellence and comprehensive training of our students in Villa Nueva, Guatemala',
        knowMore: 'Learn More',
        ourLevels: 'Our Levels'
      },
      institutional: {
        aboutUs: 'About Us',
        aboutUsTitle: 'Canterbury Villanovano Episcopal School',
        aboutUsText: 'We are an educational institution committed to academic excellence and comprehensive training of our students. Located in Villa Nueva, Guatemala, we offer quality education based on Christian values and Episcopal principles.',
        mission: 'Mission',
        missionText: 'We are a Christian educational institution committed to the comprehensive formation of children and young people at preschool, elementary, middle school and high school levels. We base our educational work on the principles and values of the Christian faith, promoting education based on love, truth, justice, respect and responsibility. We direct our efforts toward academic excellence through a participatory, structured and updated pedagogical approach that integrates the development of critical thinking, mastery of scientific and technological skills, and moral and spiritual formation of our students, preparing them to face with maturity and leadership the challenges of the contemporary world.\n\nInstitutional Values\nIn coherence with our Christian identity and our commitment to comprehensive formation, we promote the following values as the foundation of our educational community:\nLove: Essential principle of the Christian faith that guides our relationships, promoting service, empathy, and respect for human dignity.\nHonesty: Acting with transparency, consistency, and commitment to the truth in every action.\nJustice: Ensuring equal opportunities and acting with the common good and the dignity of each person in mind.\nRespect: Recognizing and valuing diversity, fostering harmonious and democratic coexistence.\nPeace: Building relationships based on unity, dialogue, and shared responsibility.\nSolidarity: Serving and actively collaborating for the benefit of others and the community.\nResponsibility: Fulfilling assumed duties with commitment, maintaining fidelity to our institutional principles.\nDiscipline: Acting with order, perseverance, and respect for our own and others’ time.\nHumility: Recognizing our strengths and limitations, remaining open to continuous learning.\nPerseverance and Industriousness: Striving with dedication and perseverance to achieve academic and personal goals.\nKindness and Joy: Living with a positive attitude, practicing good, and reflecting hope in our daily work.',
        vision: 'Vision',
        visionText: 'To establish ourselves as an educational institution of recognized prestige, distinguished by its academic excellence and by the comprehensive formation of people with solid Christian principles, capable of leading with ethics, commitment and responsibility in the scientific, social, cultural and sports fields, contributing significantly to the transformation of society.',
        values: 'Values',
        valuesText: 'Love: Essential principle of the Christian faith that guides our relationships, promoting service, empathy, and respect for human dignity.\nHonesty: Acting with transparency, consistency, and commitment to the truth in every action.\nJustice: Ensuring equal opportunities and acting with the common good and the dignity of each person in mind.\nRespect: Recognizing and valuing diversity, fostering harmonious and democratic coexistence.\nPeace: Building relationships based on unity, dialogue, and shared responsibility.\nSolidarity: Serving and actively collaborating for the benefit of others and the community.\nResponsibility: Fulfilling assumed duties with commitment, maintaining fidelity to our institutional principles.\nDiscipline: Acting with order, perseverance, and respect for our own and others’ time.\nHumility: Recognizing our strengths and limitations, remaining open to continuous learning.\nPerseverance and Industriousness: Striving with dedication and perseverance to achieve academic and personal goals.\nKindness and Joy: Living with a positive attitude, practicing good, and reflecting hope in our daily work.'
      },
      educationalLevels: {
        title: 'Our Educational Levels',
        subtitle: 'We offer comprehensive education from preschool to high school',
        preschool: 'Preschool',
        preschoolAges: '4-6 years',
        preschoolDesc: 'Initial level focused on comprehensive development',
        preschoolFeatures: ['Early stimulation', 'Psychomotor development', 'Educational games'],
        primary: 'Elementary',
        primaryAges: '7-12 years',
        primaryDesc: 'Basic education focused on fundamental skills',
        primaryFeatures: ['Math and Science', 'Reading and writing development', 'Physical Education and Arts'],
        secondary: 'Middle School',
        secondaryAges: '13-15 years',
        secondaryDesc: 'Secondary education with solid academic training',
        secondaryFeatures: ['Science and Technology', 'Foreign languages', 'High school preparation'],
        highschool: 'High School',
        highschoolAges: '16-18 years',
        highschoolDesc: 'University preparation with specialties',
        highschoolFeatures: ['University preparation', 'Technical specialties', 'Professional training'],
        ctaTitle: 'Ready to enroll?',
        ctaText: 'Join our educational community and provide your child with the best education',
        enrollNow: 'Enroll Now',
        requestInfo: 'Request Info',
        requestInfoLabel: 'Request more information'
      },
      news: {
        title: 'News and Events',
        subtitle: 'Stay informed about the latest school activities',
        news: 'News',
        event: 'Event',
        readMore: 'Read more',
        loading: 'Loading events...'
      },
      carousel: {
        title: 'Image Gallery',
        subtitle: 'Discover our facilities and special moments',
        loading: 'Loading gallery...'
      },
      footer: {
        contact: 'Contact',
        address: 'Address',
        addressText: 'Villa Nueva, Guatemala',
        phone: 'Phone',
        email: 'Email',
        followUs: 'Follow Us',
        quickLinks: 'Quick Links',
        allRightsReserved: 'All rights reserved.',
        schedule: 'Schedule',
        classes: 'Classes',
        mondayToFriday: 'Monday to Friday',
        parentsAttention: 'Parent Attention',
        coordination: 'Coordination',
        administration: 'Administration',
        backToTop: 'Back to top'
      },
      features: {
        bilingual: 'Quality bilingual education',
        facilities: 'Modern and safe facilities',
        teachers: 'Qualified teaching staff',
        technology: 'Advanced educational technology',
        extracurricular: 'Extracurricular activities',
        personalized: 'Personalized attention',
        values: 'Christian values',
        comprehensive: 'Comprehensive training'
      }
    };

    // Français
    this.translations['fr'] = {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        levels: 'Niveaux',
        contact: 'Contact'
      },
      hero: {
        title: 'Bienvenue au Collège Episcopal Canterbury Villanovano',
        subtitle: 'Institution éducative engagée dans l\'excellence académique et la formation intégrale de nos élèves à Villa Nueva, Guatemala',
        knowMore: 'En savoir plus',
        ourLevels: 'Nos Niveaux'
      },
      institutional: {
        aboutUs: 'À propos de nous',
        aboutUsTitle: 'Collège Episcopal Canterbury Villanovano',
        aboutUsText: 'Nous sommes une institution éducative engagée dans l\'excellence académique et la formation intégrale de nos élèves. Situés à Villa Nueva, Guatemala, nous offrons une éducation de qualité basée sur les valeurs chrétiennes et les principes épiscopaux.',
        mission: 'Mission',
        missionText: 'Nous sommes une institution éducative chrétienne engagée dans la formation intégrale des enfants et des jeunes aux niveaux préscolaire, primaire, collège et lycée. Nous fondons notre travail éducatif sur les principes et valeurs de la foi chrétienne, promouvant une éducation basée sur l\'amour, la vérité, la justice, le respect et la responsabilité. Nous orientons nos efforts vers l\'excellence académique à travers une approche pédagogique participative, structurée et actualisée qui intègre le développement de la pensée critique, la maîtrise des compétences scientifiques et technologiques, et la formation morale et spirituelle de nos élèves, les préparant à affronter avec maturité et leadership les défis du monde contemporain.\n\nValeurs Institutionnelles\nEn cohérence avec notre identité chrétienne et notre engagement envers la formation intégrale, nous promouvons les valeurs suivantes comme fondement de notre communauté éducative:\nAmour: Principe essentiel de la foi chrétienne qui guide nos relations, promouvant le service, l\'empathie et le respect de la dignité humaine.\nHonnetété: Agir avec transparence, cohérence et engagement envers la vérité dans chaque action.\nJustice: Garantir l\'galité des chances et agir en tenant compte du bien commun et de la dignité de chaque personne.\nRespect: Reconnaître et valoriser la diversité, favorisant une coexistence harmonieuse et démocratique.\nPaix: Construire des relations basées sur l\'unité, le dialogue et la responsabilité partagée.\nSolidarité: Servir et collaborer activement au bénéfice des autres et de la communauté.\nResponsabilité: Accomplir avec engagement les devoirs assumés, en maintenant la fidélité à nos principes institutionnels.\nDiscipline: Agir avec ordre, persévérance et respect de notre propre temps et de celui des autres.\nHumilité: Reconnaître nos forces et limites, en restant ouverts à l\'apprentissage continu.\nPersévérance et Labeur: S\'efforcer avec dévouement et persévérance d\'atteindre des objectifs académiques et personnels.\nBonté et Joie: Vivre avec une attitude positive, en pratiquant le bien et en reflétant l\'espoir dans notre travail quotidien.',
        vision: 'Vision',
        visionText: 'Nous consolider en tant qu\'institution éducative de prestige reconnu, distinguée par son excellence académique et par la formation intégrale de personnes aux solides principes chrétiens, capables de diriger avec éthique, engagement et responsabilité dans les domaines scientifique, social, culturel et sportif, contribuant de manière significative à la transformation de la société.',
        values: 'Valeurs',
        valuesText: 'En cohérence avec notre identité chrétienne et notre engagement envers la formation intégrale, nous promouvons les valeurs suivantes comme fondement de notre communauté éducative:\nAmour: Principe essentiel de la foi chrétienne qui guide nos relations, promouvant le service, l\'empathie et le respect de la dignité humaine.\nHonnetété: Agir avec transparence, cohérence et engagement envers la vérité dans chaque action.\nJustice: Garantir l\'galité des chances et agir en tenant compte du bien commun et de la dignité de chaque personne.\nRespect: Reconnaître et valoriser la diversité, favorisant une coexistence harmonieuse et démocratique.\nPaix: Construire des relations basées sur l\'unité, le dialogue et la responsabilité partagée.\nSolidarité: Servir et collaborer activement au bénéfice des autres et de la communauté.\nResponsabilité: Accomplir avec engagement les devoirs assumés, en maintenant la fidélité à nos principes institutionnels.\nDiscipline: Agir avec ordre, persévérance et respect de notre propre temps et de celui des autres.\nHumilité: Reconnaître nos forces et limites, en restant ouverts à l\'apprentissage continu.\nPersévérance et Labeur: S\'efforcer avec dévouement et persévérance d\'atteindre des objectifs académiques et personnels.\nBonté et Joie: Vivre avec une attitude positive, en pratiquant le bien et en reflétant l\'espoir dans notre travail quotidien.'
      },
      educationalLevels: {
        title: 'Nos Niveaux Éducatifs',
        subtitle: 'Nous offrons une éducation intégrale de la maternelle au lycée',
        preschool: 'Maternelle',
        preschoolAges: '4-6 ans',
        preschoolDesc: 'Niveau initial axé sur le développement intégral',
        preschoolFeatures: ['Stimulation précoce', 'Développement psychomoteur', 'Jeux éducatifs'],
        primary: 'Primaire',
        primaryAges: '7-12 ans',
        primaryDesc: 'Éducation de base axée sur les compétences fondamentales',
        primaryFeatures: ['Mathématiques et Sciences', 'Développement de la lecture et écriture', 'Éducation Physique et Arts'],
        secondary: 'Collège',
        secondaryAges: '13-15 ans',
        secondaryDesc: 'Enseignement secondaire avec formation académique solide',
        secondaryFeatures: ['Sciences et Technologie', 'Langues étrangères', 'Préparation au lycée'],
        highschool: 'Lycée',
        highschoolAges: '16-18 ans',
        highschoolDesc: 'Préparation universitaire avec spécialités',
        highschoolFeatures: ['Préparation universitaire', 'Spécialités techniques', 'Formation professionnelle'],
        ctaTitle: 'Prêt à vous inscrire?',
        ctaText: 'Rejoignez notre communauté éducative et offrez à votre enfant la meilleure éducation',
        enrollNow: 'Inscrivez-vous maintenant',
        requestInfo: 'Demander des infos',
        requestInfoLabel: 'Demander plus d\'informations'
      },
      news: {
        title: 'Nouvelles et Événements',
        subtitle: 'Restez informé des dernières activités de l\'école',
        news: 'Nouvelle',
        event: 'Événement',
        readMore: 'Lire la suite',
        loading: 'Chargement des événements...'
      },
      carousel: {
        title: 'Galerie d\'Images',
        subtitle: 'Découvrez nos installations et moments spéciaux',
        loading: 'Chargement de la galerie...'
      },
      footer: {
        contact: 'Contact',
        address: 'Adresse',
        addressText: 'Villa Nueva, Guatemala',
        phone: 'Téléphone',
        email: 'Email',
        followUs: 'Suivez-nous',
        quickLinks: 'Liens Rapides',
        allRightsReserved: 'Tous droits réservés.',
        schedule: 'Horaires',
        classes: 'Cours',
        mondayToFriday: 'Lundi au Vendredi',
        parentsAttention: 'Attention aux Parents',
        coordination: 'Coordination',
        administration: 'Administration',
        backToTop: 'Retour en haut'
      },
      features: {
        bilingual: 'Éducation bilingue de qualité',
        facilities: 'Installations modernes et sécurisées',
        teachers: 'Personnel enseignant qualifié',
        technology: 'Technologie éducative avancée',
        extracurricular: 'Activités parascolaires',
        personalized: 'Attention personnalisée',
        values: 'Valeurs chrétiennes',
        comprehensive: 'Formation intégrale'
      }
    };

    // Português
    this.translations['pt'] = {
      nav: {
        home: 'Início',
        about: 'Sobre',
        levels: 'Níveis',
        contact: 'Contato'
      },
      hero: {
        title: 'Bem-vindo ao Colégio Episcopal Canterbury Villanovano',
        subtitle: 'Instituição educacional comprometida com a excelência acadêmica e a formação integral dos nossos alunos em Villa Nueva, Guatemala',
        knowMore: 'Saiba Mais',
        ourLevels: 'Nossos Níveis'
      },
      institutional: {
        aboutUs: 'Sobre Nós',
        aboutUsTitle: 'Colégio Episcopal Canterbury Villanovano',
        aboutUsText: 'Somos uma instituição educacional comprometida com a excelência acadêmica e a formação integral dos nossos alunos. Localizados em Villa Nueva, Guatemala, oferecemos educação de qualidade baseada em valores cristãos e princípios episcopais.',
        mission: 'Missão',
        missionText: 'Somos uma instituição educacional cristã comprometida com a formação integral de crianças e jovens nos níveis de pré-escola, ensino fundamental, ensino médio inicial e ensino médio superior. Fundamentamos nosso trabalho educacional nos princípios e valores da fé cristã, promovendo uma educação baseada no amor, na verdade, na justiça, no respeito e na responsabilidade. Orientamos nossos esforços para a excelência acadêmica através de uma proposta pedagógica participativa, estruturada e atualizada, que integra o desenvolvimento do pensamento crítico, o domínio de competências científicas e tecnológicas, e a formação moral e espiritual dos nossos alunos, preparando-os para enfrentar com maturidade e liderança os desafios do mundo contemporâneo.\n\nValores Institucionais\nEm coerência com nossa identidade cristã e nosso compromisso com a formação integral, promovemos os seguintes valores como fundamento de nossa comunidade educacional:\nAmor: Princípio essencial da fé cristã que orienta nossas relações, promovendo serviço, empatia e respeito pela dignidade humana.\nHonestidade: Agir com transparência, coerência e compromisso com a verdade em cada ação.\nJustiça: Garantir igualdade de oportunidades e agir lembrando do bem comum e da dignidade de cada pessoa.\nRespeito: Reconhecer e valorizar a diversidade, fomentando uma convivência harmônica e democrática.\nPaz: Construir relações baseadas na unidade, no diálogo e na responsabilidade compartilhada.\nSolidariedade: Servir e colaborar ativamente em benefício dos outros e da comunidade.\nResponsabilidade: Cumprir com compromisso os deveres assumidos, mantendo fidelidade aos nossos princípios institucionais.\nDisciplina: Agir com ordem, constância e respeito pelo tempo próprio e alheio.\nHumildade: Reconhecer nossas forças e limitações, mantendo abertura ao aprendizado contínuo.\nPerseverança e Laboriosidade: Esforçar-nos com dedicação e perseverança para alcançar metas acadêmicas e pessoais.\nBondade e Alegria: Viver com atitude positiva, praticando o bem e refletindo esperança em nosso trabalho diário.',
        vision: 'Visão',
        visionText: 'Consolidar-nos como uma instituição educacional de reconhecido prestígio, distinguida por sua excelência acadêmica e pela formação integral de pessoas com sólidos princípios cristãos, capazes de liderar com ética, compromisso e responsabilidade nos âmbitos científico, social, cultural e esportivo, contribuindo de maneira significativa para a transformação da sociedade.',
        values: 'Valores',
        valuesText: 'Em coerência com nossa identidade cristã e nosso compromisso com a formação integral, promovemos os seguintes valores como fundamento de nossa comunidade educacional:\nAmor: Princípio essencial da fé cristã que orienta nossas relações, promovendo serviço, empatia e respeito pela dignidade humana.\nHonestidade: Agir com transparência, coerência e compromisso com a verdade em cada ação.\nJustiça: Garantir igualdade de oportunidades e agir lembrando do bem comum e da dignidade de cada pessoa.\nRespeito: Reconhecer e valorizar a diversidade, fomentando uma convivência harmônica e democrática.\nPaz: Construir relações baseadas na unidade, no diálogo e na responsabilidade compartilhada.\nSolidariedade: Servir e colaborar ativamente em benefício dos outros e da comunidade.\nResponsabilidade: Cumprir com compromisso os deveres assumidos, mantendo fidelidade aos nossos princípios institucionais.\nDisciplina: Agir com ordem, constância e respeito pelo tempo próprio e alheio.\nHumildade: Reconhecer nossas forças e limitações, mantendo abertura ao aprendizado contínuo.\nPerseverança e Laboriosidade: Esforçar-nos com dedicação e perseverança para alcançar metas acadêmicas e pessoais.\nBondade e Alegria: Viver com atitude positiva, praticando o bem e refletindo esperança em nosso trabalho diário.'
      },
      educationalLevels: {
        title: 'Nossos Níveis Educacionais',
        subtitle: 'Oferecemos educação integral do maternal ao ensino médio',
        preschool: 'Maternal',
        preschoolAges: '4-6 anos',
        preschoolDesc: 'Nível inicial focado no desenvolvimento integral',
        preschoolFeatures: ['Estimulação precoce', 'Desenvolvimento psicomotor', 'Jogos educativos'],
        primary: 'Fundamental',
        primaryAges: '7-12 anos',
        primaryDesc: 'Educação básica focada em habilidades fundamentais',
        primaryFeatures: ['Matemática e Ciências', 'Desenvolvimento de leitura e escrita', 'Educação Física e Artes'],
        secondary: 'Médio Inicial',
        secondaryAges: '13-15 anos',
        secondaryDesc: 'Ensino médio com formação acadêmica sólida',
        secondaryFeatures: ['Ciências e Tecnologia', 'Línguas estrangeiras', 'Preparação para ensino médio'],
        highschool: 'Médio Superior',
        highschoolAges: '16-18 anos',
        highschoolDesc: 'Preparação universitária com especialidades',
        highschoolFeatures: ['Preparação universitária', 'Especialidades técnicas', 'Formação profissional'],
        ctaTitle: 'Pronto para se inscrever?',
        ctaText: 'Junte-se à nossa comunidade educacional e ofereça ao seu filho(a) a melhor educação',
        enrollNow: 'Inscrever-se Agora',
        requestInfo: 'Solicitar Informações',
        requestInfoLabel: 'Solicitar mais informações'
      },
      news: {
        title: 'Notícias e Eventos',
        subtitle: 'Mantenha-se informado sobre as últimas atividades da escola',
        news: 'Notícia',
        event: 'Evento',
        readMore: 'Leia mais',
        loading: 'Carregando eventos...'
      },
      carousel: {
        title: 'Galeria de Imagens',
        subtitle: 'Descubra nossas instalações e momentos especiais',
        loading: 'Carregando galeria...'
      },
      footer: {
        contact: 'Contato',
        address: 'Endereço',
        addressText: 'Villa Nueva, Guatemala',
        phone: 'Telefone',
        email: 'Email',
        followUs: 'Siga-nos',
        quickLinks: 'Links Rápidos',
        allRightsReserved: 'Todos os direitos reservados.',
        schedule: 'Horários',
        classes: 'Aulas',
        mondayToFriday: 'Segunda a Sexta',
        parentsAttention: 'Atendimento aos Pais',
        coordination: 'Coordenação',
        administration: 'Administração',
        backToTop: 'Voltar ao topo'
      },
      features: {
        bilingual: 'Educação bilíngue de qualidade',
        facilities: 'Instalações modernas e seguras',
        teachers: 'Corpo docente qualificado',
        technology: 'Tecnologia educacional avançada',
        extracurricular: 'Atividades extracurriculares',
        personalized: 'Atenção personalizada',
        values: 'Valores cristãos',
        comprehensive: 'Formação integral'
      }
    };

    // Deutsch
    this.translations['de'] = {
      nav: {
        home: 'Start',
        about: 'Über uns',
        levels: 'Stufen',
        contact: 'Kontakt'
      },
      hero: {
        title: 'Willkommen an der Canterbury Villanovano Episcopal Schule',
        subtitle: 'Bildungseinrichtung, die sich der akademischen Exzellenz und der umfassenden Ausbildung unserer Schüler in Villa Nueva, Guatemala, verpflichtet hat',
        knowMore: 'Mehr erfahren',
        ourLevels: 'Unsere Stufen'
      },
      institutional: {
        aboutUs: 'Über uns',
        aboutUsTitle: 'Canterbury Villanovano Episcopal Schule',
        aboutUsText: 'Wir sind eine Bildungseinrichtung, die sich der akademischen Exzellenz und der umfassenden Ausbildung unserer Schüler verpflichtet hat. In Villa Nueva, Guatemala gelegen, bieten wir qualitativ hochwertige Bildung auf der Grundlage christlicher Werte und episkopaler Prinzipien.',
        mission: 'Mission',
        missionText: 'Wir sind eine christliche Bildungseinrichtung, die sich der umfassenden Bildung von Kindern und Jugendlichen auf Vorschul-, Grundschul-, Mittelschul- und Oberstufenniveau verpflichtet hat. Wir gründen unsere Bildungsarbeit auf die Prinzipien und Werte des christlichen Glaubens und fördern eine Bildung, die auf Liebe, Wahrheit, Gerechtigkeit, Respekt und Verantwortung basiert. Wir richten unsere Bemühungen auf akademische Exzellenz durch einen partizipativen, strukturierten und aktualisierten pädagogischen Ansatz, der die Entwicklung kritischen Denkens, die Beherrschung wissenschaftlicher und technologischer Kompetenzen sowie die moralische und spirituelle Bildung unserer Schüler integriert und sie darauf vorbereitet, mit Reife und Führungsstärke die Herausforderungen der zeitgenössischen Welt zu meistern.\n\nInstitutionelle Werte\nIn Übereinstimmung mit unserer christlichen Identität und unserem Engagement für umfassende Bildung fördern wir die folgenden Werte als Grundlage unserer Bildungsgemeinschaft:\nLiebe: Wesentliches Prinzip des christlichen Glaubens, das unsere Beziehungen leitet und Dienst, Empathie und Respekt für die menschliche Würde fördert.\nEhrlichkeit: Mit Transparenz, Kohärenz und Engagement für die Wahrheit in jeder Handlung agieren.\nGerechtigkeit: Chancengleichheit gewährleisten und mit Blick auf das Gemeinwohl und die Würde jeder Person handeln.\nRespekt: Vielfalt anerkennen und schätzen und ein harmonisches und demokratisches Zusammenleben fördern.\nFrieden: Beziehungen aufbauen, die auf Einheit, Dialog und gemeinsamer Verantwortung basieren.\nSolidarität: Aktiv zum Wohl anderer und der Gemeinschaft dienen und zusammenarbeiten.\nVerantwortung: Übernommene Pflichten engagiert erfüllen und unseren institutionellen Prinzipien treu bleiben.\nDisziplin: Mit Ordnung, Ausdauer und Respekt für die eigene Zeit und die Zeit anderer handeln.\nDemut: Unsere Stärken und Grenzen anerkennen und offen für kontinuierliches Lernen bleiben.\nAusdauer und Fleiß: Mit Hingabe und Ausdauer bestrebt sein, akademische und persönliche Ziele zu erreichen.\nGüte und Freude: Mit positiver Einstellung leben, Gutes praktizieren und Hoffnung in unserer täglichen Arbeit widerspiegeln.',
        vision: 'Vision',
        visionText: 'Uns als Bildungseinrichtung von anerkanntem Prestige zu etablieren, die sich durch akademische Exzellenz und durch die umfassende Bildung von Menschen mit soliden christlichen Prinzipien auszeichnet, die in der Lage sind, mit Ethik, Engagement und Verantwortung im wissenschaftlichen, sozialen, kulturellen und sportlichen Bereich zu führen und wesentlich zur Transformation der Gesellschaft beizutragen.',
        values: 'Werte',
        valuesText: 'In Übereinstimmung mit unserer christlichen Identität und unserem Engagement für umfassende Bildung fördern wir die folgenden Werte als Grundlage unserer Bildungsgemeinschaft:\nLiebe: Wesentliches Prinzip des christlichen Glaubens, das unsere Beziehungen leitet und Dienst, Empathie und Respekt für die menschliche Würde fördert.\nEhrlichkeit: Mit Transparenz, Kohärenz und Engagement für die Wahrheit in jeder Handlung agieren.\nGerechtigkeit: Chancengleichheit gewährleisten und mit Blick auf das Gemeinwohl und die Würde jeder Person handeln.\nRespekt: Vielfalt anerkennen und schätzen und ein harmonisches und demokratisches Zusammenleben fördern.\nFrieden: Beziehungen aufbauen, die auf Einheit, Dialog und gemeinsamer Verantwortung basieren.\nSolidarität: Aktiv zum Wohl anderer und der Gemeinschaft dienen und zusammenarbeiten.\nVerantwortung: Übernommene Pflichten engagiert erfüllen und unseren institutionellen Prinzipien treu bleiben.\nDisziplin: Mit Ordnung, Ausdauer und Respekt für die eigene Zeit und die Zeit anderer handeln.\nDemut: Unsere Stärken und Grenzen anerkennen und offen für kontinuierliches Lernen bleiben.\nAusdauer und Fleiß: Mit Hingabe und Ausdauer bestrebt sein, akademische und persönliche Ziele zu erreichen.\nGüte und Freude: Mit positiver Einstellung leben, Gutes praktizieren und Hoffnung in unserer täglichen Arbeit widerspiegeln.'
      },
      educationalLevels: {
        title: 'Unsere Bildungsstufen',
        subtitle: 'Wir bieten umfassende Bildung vom Kindergarten bis zur Oberstufe',
        preschool: 'Kindergarten',
        preschoolAges: '4-6 Jahre',
        preschoolDesc: 'Anfangsstufe mit Schwerpunkt auf ganzheitlicher Entwicklung',
        preschoolFeatures: ['Frühförderung', 'Psychomotorische Entwicklung', 'Lernspiele'],
        primary: 'Grundschule',
        primaryAges: '7-12 Jahre',
        primaryDesc: 'Grundbildung mit Schwerpunkt auf grundlegenden Fähigkeiten',
        primaryFeatures: ['Mathematik und Naturwissenschaften', 'Lese- und Schreibentwicklung', 'Sport und Kunst'],
        secondary: 'Mittelstufe',
        secondaryAges: '13-15 Jahre',
        secondaryDesc: 'Sekundärbildung mit solider akademischer Ausbildung',
        secondaryFeatures: ['Wissenschaft und Technologie', 'Fremdsprachen', 'Vorbereitung auf die Oberstufe'],
        highschool: 'Oberstufe',
        highschoolAges: '16-18 Jahre',
        highschoolDesc: 'Universitätsvorbereitung mit Spezialgebieten',
        highschoolFeatures: ['Universitätsvorbereitung', 'Technische Spezialisierungen', 'Berufsausbildung'],
        ctaTitle: 'Bereit zur Anmeldung?',
        ctaText: 'Werden Sie Teil unserer Bildungsgemeinschaft und bieten Sie Ihrem Kind die beste Bildung',
        enrollNow: 'Jetzt anmelden',
        requestInfo: 'Info anfordern',
        requestInfoLabel: 'Weitere Informationen anfordern'
      },
      news: {
        title: 'Nachrichten und Veranstaltungen',
        subtitle: 'Bleiben Sie über die neuesten Schulaktivitäten informiert',
        news: 'Nachricht',
        event: 'Veranstaltung',
        readMore: 'Mehr lesen',
        loading: 'Lade Veranstaltungen...'
      },
      carousel: {
        title: 'Bildergalerie',
        subtitle: 'Entdecken Sie unsere Einrichtungen und besonderen Momente',
        loading: 'Galerie wird geladen...'
      },
      footer: {
        contact: 'Kontakt',
        address: 'Adresse',
        addressText: 'Villa Nueva, Guatemala',
        phone: 'Telefon',
        email: 'E-Mail',
        followUs: 'Folgen Sie uns',
        quickLinks: 'Schnelllinks',
        allRightsReserved: 'Alle Rechte vorbehalten.',
        schedule: 'Zeitplan',
        classes: 'Unterricht',
        mondayToFriday: 'Montag bis Freitag',
        parentsAttention: 'Elternbetreuung',
        coordination: 'Koordination',
        administration: 'Verwaltung',
        backToTop: 'Nach oben'
      },
      features: {
        bilingual: 'Qualitativ hochwertige bilinguale Bildung',
        facilities: 'Moderne und sichere Einrichtungen',
        teachers: 'Qualifiziertes Lehrpersonal',
        technology: 'Fortschrittliche Bildungstechnologie',
        extracurricular: 'Außerschulische Aktivitäten',
        personalized: 'Persönliche Betreuung',
        values: 'Christliche Werte',
        comprehensive: 'Umfassende Ausbildung'
      }
    };
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    localStorage.setItem('preferred-language', lang);
  }

  translate(key: string): string {
    const keys = key.split('.');
    let translation = this.translations[this.currentLanguage()];
    
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        return key; // Retorna la clave si no encuentra traducción
      }
    }
    
    return typeof translation === 'string' ? translation : key;
  }

  t(key: string): string {
    return this.translate(key);
  }
}
