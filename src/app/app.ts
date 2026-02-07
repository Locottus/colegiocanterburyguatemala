import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { InstitutionalInfo } from './components/institutional-info/institutional-info';
import { EducationalLevels } from './components/educational-levels/educational-levels';
import { NewsEvents } from './components/news-events/news-events';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Hero,
    InstitutionalInfo,
    EducationalLevels,
    NewsEvents,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Colegio Episcopal Canterbury Villanovano');
}
