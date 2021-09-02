import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ngx-gallery-arrows',
  templateUrl: './ngx-gallery-arrows.component.html',
  styleUrls: ['./ngx-gallery-arrows.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxGalleryArrowsComponent {
  @Input() prevDisabled: boolean;
  @Input() nextDisabled: boolean;
  @Input() arrowPrevIcon: string;
  @Input() arrowNextIcon: string;

  @Output() prevClick = new EventEmitter<void>();
  @Output() nextClick = new EventEmitter<void>();

  handlePrevClick(): void {
    this.prevClick.emit();
  }

  handleNextClick(): void {
    this.nextClick.emit();
  }
}
