import { Component, signal, OnInit } from '@angular/core';
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
export class NewsEvents implements OnInit {
  constructor(public translationService: TranslationService) {}
  
  newsEvents = signal<NewsEventItem[]>([]);
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);
  selectedItem = signal<NewsEventItem | null>(null);
  showModal = signal<boolean>(false);

  ngOnInit(): void {
    this.loadNewsEvents();
  }

  private async loadNewsEvents(): Promise<void> {
    try {
      this.isLoading.set(true);
      this.error.set(null);
      
      const response = await fetch('/events/eventos.js');
      if (!response.ok) {
        throw new Error('Error al cargar los eventos');
      }
      
      const text = await response.text();
      // Parsear el contenido del archivo JSON
      const events = JSON.parse(text) as NewsEventItem[];
      
      this.newsEvents.set(events);
    } catch (err) {
      console.error('Error cargando eventos:', err);
      this.error.set('No se pudieron cargar los eventos');
      // Fallback con datos de ejemplo
      this.newsEvents.set([
        {
          id: 1,
          type: 'noticia',
          title: 'Error al cargar eventos',
          excerpt: 'No se pudieron cargar los eventos dinámicamente.',
          date: '11 Feb 2026',
          author: 'Sistema',
          image: '/carrousel/G9VVrA1WMAApzsk.jpg'
        }
      ]);
    } finally {
      this.isLoading.set(false);
    }
  }

  protected openModal(item: NewsEventItem): void {
    this.selectedItem.set(item);
    this.showModal.set(true);
    // Evitar scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  }

  protected closeModal(): void {
    this.showModal.set(false);
    this.selectedItem.set(null);
    // Restaurar scroll del body
    document.body.style.overflow = '';
  }

  protected onModalBackdropClick(event: MouseEvent): void {
    // Cerrar solo si se hace clic en el backdrop, no en el contenido
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}
