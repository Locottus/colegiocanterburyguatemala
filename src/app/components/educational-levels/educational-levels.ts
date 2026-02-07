import { Component, signal, computed } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

interface EducationalLevelItem {
  titleKey: string;
  agesKey: string;
  icon: string;
  color: string;
  featuresKeys: string[];
}

@Component({
  selector: 'app-educational-levels',
  imports: [],
  templateUrl: './educational-levels.html',
  styleUrl: './educational-levels.css'
})
export class EducationalLevels {
  constructor(public translationService: TranslationService) {}

  educationalLevels = signal<EducationalLevelItem[]>([
    {
      titleKey: 'educationalLevels.preschool',
      agesKey: 'educationalLevels.preschoolAges',
      icon: 'fas fa-baby fa-3x',
      color: '#ff6b9d',
      featuresKeys: [
        'educationalLevels.preschoolFeatures.0',
        'educationalLevels.preschoolFeatures.1',
        'educationalLevels.preschoolFeatures.2'
      ]
    },
    {
      titleKey: 'educationalLevels.primary',
      agesKey: 'educationalLevels.primaryAges',
      icon: 'fas fa-child fa-3x',
      color: '#4dabf7',
      featuresKeys: [
        'educationalLevels.primaryFeatures.0',
        'educationalLevels.primaryFeatures.1',
        'educationalLevels.primaryFeatures.2'
      ]
    },
    {
      titleKey: 'educationalLevels.secondary',
      agesKey: 'educationalLevels.secondaryAges',
      icon: 'fas fa-user-graduate fa-3x',
      color: '#20c997',
      featuresKeys: [
        'educationalLevels.secondaryFeatures.0',
        'educationalLevels.secondaryFeatures.1',
        'educationalLevels.secondaryFeatures.2'
      ]
    },
    {
      titleKey: 'educationalLevels.highschool',
      agesKey: 'educationalLevels.highschoolAges',
      icon: 'fas fa-graduation-cap fa-3x',
      color: '#8b2635',
      featuresKeys: [
        'educationalLevels.highschoolFeatures.0',
        'educationalLevels.highschoolFeatures.1',
        'educationalLevels.highschoolFeatures.2'
      ]
    }
  ]);
}
