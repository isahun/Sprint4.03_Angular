import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class Gallery {}
