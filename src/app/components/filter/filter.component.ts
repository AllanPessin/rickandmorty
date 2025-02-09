import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-filter',
    imports: [FormsModule],
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.css',
})
export class FilterComponent {
    status: string = '';
    species: string = '';
    gender: string = '';

    @Output() statusEvent = new EventEmitter<string>();
    @Output() speciesEvent = new EventEmitter<string>();
    @Output() typeEvent = new EventEmitter<string>();
    @Output() genderEvent = new EventEmitter<string>();

    onFilterStatus() {
        this.statusEvent.emit(this.status);
    }

    onFilterSpecies() {
        this.speciesEvent.emit(this.species);
    }

    onFilterGender() {
        this.genderEvent.emit(this.gender);
    }
}
