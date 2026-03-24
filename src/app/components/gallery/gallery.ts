import { signal, Component } from '@angular/core';
import { Image } from '../../interfaces/image.interface';
import { ImageItem } from '../image-item/image-item';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { images } from '../../core/data/images';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageItem, CommonModule, ButtonModule, ImageModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  images = signal<Image[]>(images);

  featuredImageID = signal<string>(this.images()[0]?.id || '');

  removeImage(id:string) {
    const confirmation = window.confirm("Segur que vols esborrar aquesta imatge?");

    if (confirmation) {
      this.images.update(prevImages =>
        prevImages.filter(img => img.id !== id));
    }
  }
}
