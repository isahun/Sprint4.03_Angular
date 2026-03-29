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

  // Aquí la llista de seleccionats:
  selectedImageIds = signal<Set<string>>(new Set());

  removeImage(id: string) {
    // 1. Primer la treiem de la llista de fotos (el que ja tenies)
    const confirmation = window.confirm('Segur que vols esborrar aquesta imatge?');

    if (confirmation) {
      this.images.update((prevImages) => prevImages.filter((img) => img.id !== id));
    }

    // 2. ARA LA CLAU: També la treiem del Set de seleccionades
    // Si la ID existeix al Set, la borrem perquè el comptador baixi
    this.selectedImageIds.update((prevImages) => {
      const newSet = new Set(prevImages); // Creem una còpia per mantenir la immutabilitat
      newSet.delete(id); // Intentem borrar la ID
      return newSet; // Retornem el Set actualitzat
    });

    // 3. (Opcional) Si la imatge que hem esborrat era la destacada,
    // n'assignem una de nova perquè no es quedi buit
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
    // 1. Demanem a la Signal que s'actualitzi
    this.selectedImageIds.update((currentIds) => {
      // 2. Creem una COPIA del Set actual (perquè Angular s'assabenti del canvi)
      const newSet = new Set(currentIds); //nova referencia x reactivitat
      // 3. LA LÒGICA DE L'INTERRUPTOR:
      if (newSet.has(id)) {
        // Si l'ID ja estava a la llista, l'esborrem (deseleccionem)
        newSet.delete(id);
      } else {
        // Si l'ID no hi era, l'afegim (seleccionem)
        newSet.add(id);
      }
      // 4. Retornem el nou Set per guardar-lo a la Signal
      return newSet;
    });
  }

  toggleAll() {
    // Si ja les tenim totes seleccionades, les buidem (Deselect All)
    if (this.selectedImageIds().size === this.images().length) {
      this.selectedImageIds.set(new Set());
    }
    // Si no, les fiquem totes (Select All)
    else {
      const allIds = this.images().map((img) => img.id);
      this.selectedImageIds.set(new Set(allIds));
    }
  }

  deleteSelected() {
    const totalSelected = this.selectedImageIds().size;
    if (confirm(`Segur que vols esborrar aquestes ${totalSelected} imatges?`)) {
      // Filtrem les imatges que NO estan seleccionades
      this.images.update((prev) => prev.filter((img) => !this.selectedImageIds().has(img.id)));
      // Resetejem la selecció
      this.selectedImageIds.set(new Set());
      // Mantenim la coherència de la destacada
      this.featuredImageID.set(this.images()[0]?.id || '');
    }
  }
}
