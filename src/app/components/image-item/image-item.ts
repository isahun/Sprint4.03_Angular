import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-image-item',
  imports: [],
  templateUrl: './image-item.html',
  styleUrl: './image-item.css',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class ImageItem {}
