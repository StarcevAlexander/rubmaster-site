import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';

@Component({
  selector: 'app-hero-slider',
  imports: [],
  templateUrl: './hero-slider.html',
  styleUrl: './hero-slider.scss',
})
export class HeroSlider implements AfterViewInit {
  @ViewChild('swiperEl') private swiperEl!: ElementRef;

  private swiper!: Swiper;

  public readonly slides = [
    '/images/workshop-1.webp',
    '/images/mobi-300-1.webp',
    '/images/workshop-2.webp',
    '/images/mobi-250-1.webp',
    '/images/workshop-3.webp',
    '/images/mrg-300-1.webp',
    '/images/workshop-4.webp',
  ];

  ngAfterViewInit() {
    this.swiper = new Swiper(this.swiperEl.nativeElement, {
      modules: [Autoplay, EffectFade],
      effect: 'fade',
      loop: true,
      speed: 1200,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  }

  public prev() { this.swiper.slidePrev(); }
  public next() { this.swiper.slideNext(); }
}
