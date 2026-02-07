import { Component, signal } from '@angular/core';
import { TranslationService, Language } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isMenuOpen = signal(false);
  isLanguageMenuOpen = signal(false);

  constructor(public translationService: TranslationService) {}

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  toggleLanguageMenu(): void {
    this.isLanguageMenuOpen.update(value => !value);
  }

  changeLanguage(lang: Language): void {
    this.translationService.setLanguage(lang);
    this.isLanguageMenuOpen.set(false);
  }

  getCurrentLanguage() {
    return this.translationService.availableLanguages.find(
      l => l.code === this.translationService.currentLang()
    );
  }
}
