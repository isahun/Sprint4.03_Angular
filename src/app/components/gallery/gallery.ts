import { signal, Component } from '@angular/core';
import { Image } from '../../interfaces/image.interface';
import { ImageItem } from '../image-item/image-item';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';//in case we want to use the PrimeNG img component
import { ButtonModule } from 'primeng/button';
import { images } from '../../core/data/images';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageItem, CommonModule, ButtonModule, ImageModule], //import class again inside gallery component
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  //create signal with img array. Format: signal<dataType>(InitialValue)
  images = signal<Image[]>(images);

  featuredImageID = signal<string>(this.images()[0]?.id || ''); //to keep featured img

  removeImage(id:string) {
    const confirmation = window.confirm("Segur que vols esborrar aquesta imatge?");

    if (confirmation) {
      //.update takes current img list and returns a new one filtered
      this.images.update(prevImages =>
        prevImages.filter(img => img.id !== id));
    }
  }
}
