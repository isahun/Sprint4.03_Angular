import { signal, Component } from '@angular/core';
import { Image } from '../../interfaces/image.interface';
import { ImageItem } from '../image-item/image-item';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { images } from '../../core/data/images';
import { CdkDrag, CdkDropList, moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

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

  selectedImageIds = signal<Set<string>>(new Set());

  removeImage(id: string) {
    const confirmation = window.confirm('Segur que vols esborrar aquesta imatge?');

    if (confirmation) {
      this.images.update((prevImages) => prevImages.filter((img) => img.id !== id));
    }

    this.selectedImageIds.update((prevImages) => {
      const newSet = new Set(prevImages);
      newSet.delete(id);
      return newSet;
    });

    if (this.featuredImageID() === id) {
      this.featuredImageID.set(this.images()[0]?.id || '');
    }
  }

  drop(event: CdkDragDrop<Image[]>) {
    this.images.update((currentImages) => {
      moveItemInArray(currentImages, event.previousIndex, event.currentIndex);
      return [...currentImages];
    });

    this.featuredImageID.set(this.images()[0]?.id || '');
  }

  toggleSelection(id: string) {
    this.selectedImageIds.update((currentIds) => {
      const newSet = new Set(currentIds);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }

  toggleAll() {
    if (this.selectedImageIds().size === this.images().length) {
      this.selectedImageIds.set(new Set());
    }
    else {
      const allIds = this.images().map((img) => img.id);
      this.selectedImageIds.set(new Set(allIds));
    }
  }

  deleteSelected() {
    const totalSelected = this.selectedImageIds().size;
    if (confirm(`Segur que vols esborrar aquestes ${totalSelected} imatges?`)) {
      this.images.update((prev) => prev.filter((img) => !this.selectedImageIds().has(img.id)));
      this.selectedImageIds.set(new Set());
      this.featuredImageID.set(this.images()[0]?.id || '');
    }
  }
}
