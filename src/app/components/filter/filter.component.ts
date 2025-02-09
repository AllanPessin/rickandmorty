import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-filter',
    imports: [FormsModule],
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.css',
})
export class FilterComponent {
    statusOption: string = '';
    @Output() statusEvent = new EventEmitter<string>();

    onFilterStatus() {
        this.statusEvent.emit(this.statusOption);
    }
}
