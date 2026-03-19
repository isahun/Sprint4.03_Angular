import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Image } from '../../interfaces/image.interface';

@Component({
  selector: 'app-image-item',
  standalone: true,
  imports: [],
  templateUrl: './image-item.html',
  styleUrl: './image-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush, //just check if what arrives from input changes
})
export class ImageItem {
  //Data from img from parent component (gallery)
  image = input.required<Image>();//if parent tries to use component without passing an img, Angular will send an error

  //Boolean to check if image is featured
  isFeatured = input<boolean>(false);
}
