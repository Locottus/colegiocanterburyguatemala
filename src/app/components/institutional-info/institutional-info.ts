import { Component, signal, computed } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

interface InstitutionalInfoItem {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

@Component({
  selector: 'app-institutional-info',
  imports: [],
  templateUrl: './institutional-info.html',
  styleUrl: './institutional-info.css'
})
export class InstitutionalInfo {
  constructor(public translationService: TranslationService) {}
  institutionalInfo = signal<InstitutionalInfoItem[]>([
    {
      icon: 'fas fa-bullseye fa-3x text-primary-custom',
      titleKey: 'institutional.mission',
      descriptionKey: 'institutional.missionText'
    },
    {
      icon: 'fas fa-eye fa-3x text-secondary-custom',
      titleKey: 'institutional.vision',
      descriptionKey: 'institutional.visionText'
    },
    {
      icon: 'fas fa-heart fa-3x text-danger',
      titleKey: 'institutional.values',
      descriptionKey: 'institutional.valuesText'
    }
  ]);

  features = signal<string[]>([
    'Educación bilingüe de calidad',
    'Instalaciones modernas y seguras',
    'Personal docente calificado',
    'Tecnología educativa avanzada',
    'Actividades extracurriculares',
    'Atención personalizada',
    'Valores cristianos',
    'Formación integral'
  ]);
}
