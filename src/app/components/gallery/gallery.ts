import { signal, Component } from '@angular/core';
import { Image } from '../../interfaces/image.interface';
import { ImageItem } from '../image-item/image-item';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';//in case we want to use the PrimeNG img component
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageItem, CommonModule, ButtonModule, ImageModule], //import class again inside gallery component
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  //create signal with img array. Format: signal<dataType>(InitialValue)
  readonly images = signal<Image[]>([
    {
      id: '1',
      src: 'https://picsum.photos/id/10/600/400',
      alt: 'A landscape with trees in the foreground and mountains with a lake in the background.'
    },
    {
      id: '2',
      src: 'https://picsum.photos/id/17/600/400',
      alt: 'A path between grass fields and several trees at the end of the path.'
    },
    {
      id: '3',
      src: 'https://picsum.photos/id/25/600/400',
      alt: 'Branches silhouettes and the sunlight behind them.'
    },
    {
      id: '4',
      src: 'https://picsum.photos/id/49/600/400',
      alt: 'Round White mediterranean buildings'
    },
    {
      id: '5',
      src: 'https://picsum.photos/id/57/367/267',
      alt: 'Street from NYC'
    }
  ]);
}
