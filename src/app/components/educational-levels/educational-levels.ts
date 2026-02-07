import { Component, signal } from '@angular/core';

interface EducationalLevelItem {
  title: string;
  ages: string;
  icon: string;
  color: string;
  features: string[];
}

@Component({
  selector: 'app-educational-levels',
  imports: [],
  templateUrl: './educational-levels.html',
  styleUrl: './educational-levels.css'
})
export class EducationalLevels {
  educationalLevels = signal<EducationalLevelItem[]>([
    {
      title: 'Párvulos',
      ages: '4-6 años',
      icon: 'fas fa-baby fa-3x',
      color: '#ff6b9d',
      features: [
        'Estimulación temprana',
        'Desarrollo psicomotor',
        'Juegos educativos',
        'Música y arte',
        'Ambiente seguro'
      ]
    },
    {
      title: 'Primaria',
      ages: '7-12 años',
      icon: 'fas fa-child fa-3x',
      color: '#4dabf7',
      features: [
        'Educación bilingüe',
        'Matemáticas y ciencias',
        'Lectura y escritura',
        'Tecnología educativa',
        'Deportes y cultura'
      ]
    },
    {
      title: 'Básico',
      ages: '13-15 años',
      icon: 'fas fa-user-graduate fa-3x',
      color: '#20c997',
      features: [
        'Programa académico sólido',
        'Desarrollo de habilidades',
        'Orientación vocacional',
        'Proyectos de investigación',
        'Liderazgo estudiantil'
      ]
    },
    {
      title: 'Diversificado',
      ages: '16-18 años',
      icon: 'fas fa-graduation-cap fa-3x',
      color: '#8b2635',
      features: [
        'Bachillerato en Ciencias',
        'Preparación universitaria',
        'Prácticas profesionales',
        'Proyectos de servicio',
        'Certificaciones'
      ]
    }
  ]);
}
