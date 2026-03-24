import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Image } from '../../interfaces/image.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image-item',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './image-item.html',
  styleUrl: './image-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush, //just check if what arrives from input changes
})
export class ImageItem {
  //Data from img from parent component (gallery)
  image = input.required<Image>();//if parent tries to use component without passing an img, Angular will send an error

  //Boolean to check if image is featured
  isFeatured = input<boolean>(false);

  //Output property
  deleteImage = output<string>(); //return ID of img to be deleted

  onDeleteClick(event:MouseEvent) {
    event.stopPropagation(); //prevent click from makin parent crazy
    this.deleteImage.emit(this.image().id);
  }
}
