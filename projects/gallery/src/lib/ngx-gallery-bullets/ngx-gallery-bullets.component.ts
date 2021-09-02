import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ngx-gallery-bullets',
  templateUrl: './ngx-gallery-bullets.component.html',
  styleUrls: ['./ngx-gallery-bullets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxGalleryBulletsComponent {
  @Input() count: number;
  @Input() active = 0;

  @Output() bulletChange = new EventEmitter();

  getBullets(): number[] {
    return Array<number>(this.count);
  }

  handleChange(event: Event, index: number): void {
    this.bulletChange.emit(index);
  }
}
