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
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
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
        missionText: 'Formar estudiantes íntegros, con excelencia académica y valores sólidos, preparados para enfrentar los desafíos del futuro.',
        vision: 'Visión',
        visionText: 'Ser reconocidos como la institución educativa líder en Guatemala, destacada por la calidad académica y formación en valores.',
        values: 'Valores',
        valuesText: 'Excelencia, Integridad, Respeto, Responsabilidad, Innovación'
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
        highschoolFeatures: ['Preparación universitaria', 'Especialidades técnicas', 'Formación profesional']
      },
      news: {
        title: 'Noticias y Eventos',
        subtitle: 'Mantente informado sobre las últimas actividades del colegio',
        news: 'Noticia',
        event: 'Evento',
        readMore: 'Leer más'
      },
      carousel: {
        title: 'Galería de Imágenes',
        subtitle: 'Descubre nuestras instalaciones y momentos especiales'
      },
      footer: {
        contact: 'Contacto',
        address: 'Dirección',
        addressText: 'Villa Nueva, Guatemala',
        phone: 'Teléfono',
        email: 'Correo',
        followUs: 'Síguenos',
        quickLinks: 'Enlaces Rápidos',
        allRightsReserved: 'Todos los derechos reservados.'
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
        missionText: 'To form integral students with academic excellence and solid values, prepared to face future challenges.',
        vision: 'Vision',
        visionText: 'To be recognized as the leading educational institution in Guatemala, distinguished by academic quality and values formation.',
        values: 'Values',
        valuesText: 'Excellence, Integrity, Respect, Responsibility, Innovation'
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
        highschoolFeatures: ['University preparation', 'Technical specialties', 'Professional training']
      },
      news: {
        title: 'News and Events',
        subtitle: 'Stay informed about the latest school activities',
        news: 'News',
        event: 'Event',
        readMore: 'Read more'
      },
      carousel: {
        title: 'Image Gallery',
        subtitle: 'Discover our facilities and special moments'
      },
      footer: {
        contact: 'Contact',
        address: 'Address',
        addressText: 'Villa Nueva, Guatemala',
        phone: 'Phone',
        email: 'Email',
        followUs: 'Follow Us',
        quickLinks: 'Quick Links',
        allRightsReserved: 'All rights reserved.'
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
        missionText: 'Former des élèves intègres, avec excellence académique et valeurs solides, préparés à relever les défis futurs.',
        vision: 'Vision',
        visionText: 'Être reconnu comme l\'institution éducative leader au Guatemala, distinguée par la qualité académique et la formation en valeurs.',
        values: 'Valeurs',
        valuesText: 'Excellence, Intégrité, Respect, Responsabilité, Innovation'
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
        highschoolFeatures: ['Préparation universitaire', 'Spécialités techniques', 'Formation professionnelle']
      },
      news: {
        title: 'Nouvelles et Événements',
        subtitle: 'Restez informé des dernières activités de l\'école',
        news: 'Nouvelle',
        event: 'Événement',
        readMore: 'Lire la suite'
      },
      carousel: {
        title: 'Galerie d\'Images',
        subtitle: 'Découvrez nos installations et moments spéciaux'
      },
      footer: {
        contact: 'Contact',
        address: 'Adresse',
        addressText: 'Villa Nueva, Guatemala',
        phone: 'Téléphone',
        email: 'Email',
        followUs: 'Suivez-nous',
        quickLinks: 'Liens Rapides',
        allRightsReserved: 'Tous droits réservés.'
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
        missionText: 'Formar alunos íntegros, com excelência acadêmica e valores sólidos, preparados para enfrentar os desafios futuros.',
        vision: 'Visão',
        visionText: 'Ser reconhecido como a instituição educacional líder na Guatemala, destacada pela qualidade acadêmica e formação em valores.',
        values: 'Valores',
        valuesText: 'Excelência, Integridade, Respeito, Responsabilidade, Inovação'
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
        highschoolFeatures: ['Preparação universitária', 'Especialidades técnicas', 'Formação profissional']
      },
      news: {
        title: 'Notícias e Eventos',
        subtitle: 'Mantenha-se informado sobre as últimas atividades da escola',
        news: 'Notícia',
        event: 'Evento',
        readMore: 'Leia mais'
      },
      carousel: {
        title: 'Galeria de Imagens',
        subtitle: 'Descubra nossas instalações e momentos especiais'
      },
      footer: {
        contact: 'Contato',
        address: 'Endereço',
        addressText: 'Villa Nueva, Guatemala',
        phone: 'Telefone',
        email: 'Email',
        followUs: 'Siga-nos',
        quickLinks: 'Links Rápidos',
        allRightsReserved: 'Todos os direitos reservados.'
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
        missionText: 'Integrale Schüler mit akademischer Exzellenz und soliden Werten zu bilden, die darauf vorbereitet sind, zukünftige Herausforderungen zu meistern.',
        vision: 'Vision',
        visionText: 'Als führende Bildungseinrichtung in Guatemala anerkannt zu werden, die sich durch akademische Qualität und Wertebildung auszeichnet.',
        values: 'Werte',
        valuesText: 'Exzellenz, Integrität, Respekt, Verantwortung, Innovation'
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
        highschoolFeatures: ['Universitätsvorbereitung', 'Technische Spezialisierungen', 'Berufsausbildung']
      },
      news: {
        title: 'Nachrichten und Veranstaltungen',
        subtitle: 'Bleiben Sie über die neuesten Schulaktivitäten informiert',
        news: 'Nachricht',
        event: 'Veranstaltung',
        readMore: 'Mehr lesen'
      },
      carousel: {
        title: 'Bildergalerie',
        subtitle: 'Entdecken Sie unsere Einrichtungen und besonderen Momente'
      },
      footer: {
        contact: 'Kontakt',
        address: 'Adresse',
        addressText: 'Villa Nueva, Guatemala',
        phone: 'Telefon',
        email: 'E-Mail',
        followUs: 'Folgen Sie uns',
        quickLinks: 'Schnelllinks',
        allRightsReserved: 'Alle Rechte vorbehalten.'
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
