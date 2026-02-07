import { Component, signal } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

interface NewsEventItem {
  id: number;
  type: 'noticia' | 'evento';
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

@Component({
  selector: 'app-news-events',
  imports: [],
  templateUrl: './news-events.html',
  styleUrl: './news-events.css'
})
export class NewsEvents {
  constructor(public translationService: TranslationService) {}
  newsEvents = signal<NewsEventItem[]>([
    {
      id: 1,
      type: 'noticia',
      title: 'Excelentes Resultados en Exámenes Nacionales 2026',
      excerpt: 'Nuestros estudiantes obtuvieron calificaciones sobresalientes en las pruebas nacionales, posicionándonos entre los mejores colegios de la región.',
      date: '1 Feb 2026',
      author: 'Dirección Académica',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&h=300&fit=crop'
    },
    {
      id: 2,
      type: 'evento',
      title: 'Feria de Ciencias y Tecnología 2026',
      excerpt: 'Los estudiantes presentarán sus proyectos innovadores en nuestra tradicional feria anual. ¡Te esperamos el 15 de febrero!',
      date: '15 Feb 2026',
      author: 'Depto. de Ciencias',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=300&fit=crop'
    },
    {
      id: 3,
      type: 'noticia',
      title: 'Nuevas Instalaciones Deportivas Inauguradas',
      excerpt: 'Hemos inaugurado modernas instalaciones deportivas para promover la actividad física y el deporte entre nuestros estudiantes.',
      date: '28 Ene 2026',
      author: 'Coordinación Deportiva',
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&h=300&fit=crop'
    },
    {
      id: 4,
      type: 'evento',
      title: 'Inscripciones Abiertas Ciclo 2026-2027',
      excerpt: '¡Abrimos inscripciones para el próximo ciclo escolar! Visita nuestras oficinas o contáctanos para más información.',
      date: '1 Feb 2026',
      author: 'Administración',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop'
    },
    {
      id: 5,
      type: 'noticia',
      title: 'Programa de Becas 2026 Anunciado',
      excerpt: 'Ofrecemos becas académicas y deportivas para estudiantes destacados. Conoce los requisitos y postula ahora.',
      date: '20 Ene 2026',
      author: 'Becas y Ayudas',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop'
    },
    {
      id: 6,
      type: 'evento',
      title: 'Día de Puertas Abiertas',
      excerpt: 'Conoce nuestras instalaciones, profesores y programas educativos. Familias bienvenidas todos los sábados de 9:00 AM a 1:00 PM.',
      date: 'Sábados',
      author: 'Relaciones Públicas',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&h=300&fit=crop'
    }
  ]);
}
