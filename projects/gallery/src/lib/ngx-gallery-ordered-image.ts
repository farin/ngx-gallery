import {SafeResourceUrl} from '@angular/platform-browser';
import { NgxGalleryImageType } from './ngx-gallery-image';

export interface INgxGalleryOrderedImage {
  src: string | SafeResourceUrl;
  type: NgxGalleryImageType;
  index: number;
}

export class NgxGalleryOrderedImage implements INgxGalleryOrderedImage {
  src: string | SafeResourceUrl;
  type: NgxGalleryImageType;
  index: number;

  constructor(obj: INgxGalleryOrderedImage) {
    this.src = obj.src;
    this.type = obj.type;
    this.index = obj.index;
  }
}
