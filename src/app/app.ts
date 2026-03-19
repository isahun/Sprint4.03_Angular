import { Component, signal } from '@angular/core';
import { Gallery } from './components/gallery/gallery';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Gallery],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
