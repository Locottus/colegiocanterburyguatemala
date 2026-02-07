import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface NewsEvent {
  id: number;
  type: 'noticia' | 'evento';
  title: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

export interface EducationalLevel {
  id: number;
  title: string;
  ages: string;
  description: string;
  features: string[];
}

@Injectable({
  providedIn: 'root',
})
export class Data {
  private newsEventsData = signal<NewsEvent[]>([
    {
      id: 1,
      type: 'noticia',
      title: 'Excelentes Resultados en Exámenes Nacionales 2026',
      content: 'Nuestros estudiantes obtuvieron calificaciones sobresalientes...',
      excerpt: 'Nuestros estudiantes obtuvieron calificaciones sobresalientes en las pruebas nacionales.',
      date: '1 Feb 2026',
      author: 'Dirección Académica',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&h=300&fit=crop'
    }
  ]);

  private educationalLevelsData = signal<EducationalLevel[]>([
    {
      id: 1,
      title: 'Párvulos',
      ages: '4-6 años',
      description: 'Nivel inicial con enfoque en desarrollo integral',
      features: ['Estimulación temprana', 'Desarrollo psicomotor', 'Juegos educativos']
    }
  ]);

  getNewsEvents(): Observable<NewsEvent[]> {
    return of(this.newsEventsData());
  }

  getNewsEventById(id: number): Observable<NewsEvent | undefined> {
    const event = this.newsEventsData().find(item => item.id === id);
    return of(event);
  }

  getEducationalLevels(): Observable<EducationalLevel[]> {
    return of(this.educationalLevelsData());
  }

  getEducationalLevelById(id: number): Observable<EducationalLevel | undefined> {
    const level = this.educationalLevelsData().find(item => item.id === id);
    return of(level);
  }

  loadDataFromAPI(): Observable<any> {
    return of({ success: true });
  }
}
