import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Image } from '../../interfaces/image.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image-item',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './image-item.html',
  styleUrl: './image-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageItem {
  image = input.required<Image>();

  isFeatured = input<boolean>(false);

  deleteImage = output<string>();

  onDeleteClick(event:MouseEvent) {
    event.stopPropagation(); 
    this.deleteImage.emit(this.image().id);
  }
}
