import { Component, signal } from '@angular/core';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

interface QuickLink {
  name: string;
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
    { name: 'Inicio', url: '#inicio' },
    { name: 'Nosotros', url: '#nosotros' },
    { name: 'Niveles', url: '#niveles' },
    { name: 'Noticias', url: '#noticias' },
    { name: 'Admisiones', url: '#contacto' },
    { name: 'Contacto', url: '#contacto' }
  ]);
}
