import { Component, signal } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

interface QuickLink {
  nameKey: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  currentYear = signal(new Date().getFullYear());
  
  constructor(public translationService: TranslationService) {}
  
  socialLinks = signal<SocialLink[]>([
    {
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      url: 'https://facebook.com'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com'
    },
    {
      name: 'YouTube',
      icon: 'fab fa-youtube',
      url: 'https://youtube.com'
    }
  ]);
  
  quickLinks = signal<QuickLink[]>([
    { nameKey: 'nav.home', url: '#inicio' },
    { nameKey: 'nav.about', url: '#nosotros' },
    { nameKey: 'nav.levels', url: '#niveles' },
    { nameKey: 'news.title', url: '#noticias' },
    { nameKey: 'nav.contact', url: '#contacto' }
  ]);
}
