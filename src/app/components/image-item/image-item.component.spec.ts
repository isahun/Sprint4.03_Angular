import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageItem } from './image-item'; // Revisa que el fitxer es digui image-item.ts
import { describe, it, expect, beforeEach, beforeAll, vi } from 'vitest';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Image } from '../../interfaces/image.interface';
import { NgLocalization, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

// FORCEM L'INICI DE L'ENTORN AQUÍ MATEIX
beforeAll(() => {
  try {
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
  } catch (e) {
    /* Ja estava inicialitzat */
  }
});

describe('ImageItem', () => {
  let component: ImageItem;
  let fixture: ComponentFixture<ImageItem>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageItem);
    component = fixture.componentInstance;

    // Simulem que li arriba una imatge per l'input (Signal)
    // Nota: Si el teu input és un signal, es crida com una funció a dins del test
    (component.image as any).set({
      id: '1',
      src: 'test.jpg',
      alt: 'Imatge de prova',
      description: 'Descripció'
    });

    fixture.detectChanges();
  });

  it('hauria de crear el component', () => {
    expect(component).toBeTruthy();
  });

  it('hauria de mostrar la imatge amb el src i alt correctes', () => {
    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.src).toContain('test.jpg');
    expect(imgElement.alt).toBe('Imatge de prova');
  });

  it('hauria d’emetre l’esdeveniment deleteImage en clicar la brossa', () => {
    // Creem un "espia" de Vitest
    const spy = vi.fn();
    component.deleteImage.subscribe(spy);

    // Busquem el botó de borrar (el que té la icona de la brossa)
    const deleteButton = fixture.nativeElement.querySelector('button');
    deleteButton.click();

    expect(spy).toHaveBeenCalledWith('1');
  });
});
