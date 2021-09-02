import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ngx-gallery-action',
  templateUrl: './ngx-gallery-action.component.html',
  styleUrls: ['./ngx-gallery-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxGalleryActionComponent {
  @Input() icon: string;
  @Input() disabled = false;
  @Input() titleText = '';

  @Output() closeClick = new EventEmitter<Event>();

  handleClick(event: Event): void {
    if (!this.disabled) {
      this.closeClick.emit(event);
    }

    event.stopPropagation();
    event.preventDefault();
  }
}
