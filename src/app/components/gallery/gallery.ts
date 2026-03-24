import { signal, Component } from '@angular/core';
import { Image } from '../../interfaces/image.interface';
import { ImageItem } from '../image-item/image-item';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { images } from '../../core/data/images';
import {
  CdkDrag,
  CdkDropList,
  moveItemInArray,
  CdkDragDrop
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageItem, CommonModule, ButtonModule, ImageModule, CdkDrag, CdkDropList],
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

  drop(event: CdkDragDrop<Image[]>) {
    this.images.update(currentImages => {
      moveItemInArray(currentImages, event.previousIndex, event.currentIndex);
      return [...currentImages]; // Retorna una nueva referencia per a la detecció de canvis
    });

    this.featuredImageID.set(this.images()[0]?.id || '')

    }

  }

