import { Component, signal } from '@angular/core';

interface InstitutionalInfoItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-institutional-info',
  imports: [],
  templateUrl: './institutional-info.html',
  styleUrl: './institutional-info.css'
})
export class InstitutionalInfo {
  institutionalInfo = signal<InstitutionalInfoItem[]>([
    {
      icon: 'fas fa-bullseye fa-3x text-primary-custom',
      title: 'Misión',
      description: 'Formar estudiantes con excelencia académica, valores cristianos y compromiso social, capaces de enfrentar los desafíos del mundo moderno con integridad y liderazgo.'
    },
    {
      icon: 'fas fa-eye fa-3x text-secondary-custom',
      title: 'Visión',
      description: 'Ser reconocidos como una institución educativa líder en Guatemala, destacada por la calidad educativa, innovación pedagógica y formación de ciudadanos íntegros.'
    },
    {
      icon: 'fas fa-heart fa-3x text-danger',
      title: 'Valores',
      description: 'Integridad, Respeto, Excelencia, Responsabilidad, Solidaridad y Fe. Estos principios guían nuestra comunidad educativa en cada acción y decisión.'
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
