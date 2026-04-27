import { Component } from '@angular/core';
import { Header } from './header/header';
import { HeroSlider } from './sections/hero-slider/hero-slider';

@Component({
  selector: 'app-root',
  imports: [Header, HeroSlider],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
