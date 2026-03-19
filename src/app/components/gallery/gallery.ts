import { signal, Component } from '@angular/core';
import { Image } from '../../interfaces/image.interface';
import { ImageItem } from '../image-item/image-item'; 

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageItem], //import class again inside gallery component
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
    }
  ]);
}
