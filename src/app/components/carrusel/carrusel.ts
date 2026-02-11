import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface CarouselImage {
  src: string;
  alt: string;
  loaded: boolean;
}

@Component({
  selector: 'app-carrusel',
  imports: [CommonModule],
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.css'
})
export class Carrusel implements OnInit, OnDestroy {
  protected images = signal<CarouselImage[]>([]);
  protected currentIndex = signal(0);
  protected isTransitioning = signal(false);
  protected isPaused = signal(false);
  
  private autoPlayInterval: any;
  private readonly autoPlayDelay = 5000;
  private touchStartX = 0;
  private touchEndX = 0;

  constructor(public translationService: TranslationService) {}

  ngOnInit(): void {
    this.loadImages();
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  private loadImages(): void {
    // Lista de imágenes en la carpeta public/carrousel
    // Para actualizaciones dinámicas sin rebuild, solo agrega el nombre del archivo aquí
    const imageFiles = [
      'G9VVrA1WMAApzsk.jpg',
      'lobi.JPG',
      'lobo.JPG',
      'maclay.JPG',
      'rexTie.jpg'
    ];

    const loadedImages: CarouselImage[] = imageFiles.map(file => ({
      src: `/carrousel/${file}`,
      alt: `Imagen del Colegio Canterbury - ${file.split('.')[0]}`,
      loaded: false
    }));

    this.images.set(loadedImages);
  }

  protected onImageLoad(index: number): void {
    const currentImages = this.images();
    currentImages[index].loaded = true;
    this.images.set([...currentImages]);
  }

  protected goToSlide(index: number): void {
    if (this.isTransitioning() || index === this.currentIndex()) return;
    
    this.isTransitioning.set(true);
    this.currentIndex.set(index);
    
    setTimeout(() => {
      this.isTransitioning.set(false);
    }, 600);

    this.resetAutoPlay();
  }

  protected nextSlide(): void {
    const nextIndex = (this.currentIndex() + 1) % this.images().length;
    this.goToSlide(nextIndex);
  }

  protected prevSlide(): void {
    const prevIndex = (this.currentIndex() - 1 + this.images().length) % this.images().length;
    this.goToSlide(prevIndex);
  }

  protected onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  protected onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe(): void {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }

  protected togglePause(): void {
    this.isPaused.set(!this.isPaused());
    if (this.isPaused()) {
      this.stopAutoPlay();
    } else {
      this.startAutoPlay();
    }
  }

  private startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      if (!this.isPaused()) {
        this.nextSlide();
      }
    }, this.autoPlayDelay);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  private resetAutoPlay(): void {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  protected onMouseEnter(): void {
    this.stopAutoPlay();
  }

  protected onMouseLeave(): void {
    if (!this.isPaused()) {
      this.startAutoPlay();
    }
  }
}
