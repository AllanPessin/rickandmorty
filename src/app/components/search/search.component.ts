import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search',
    imports: [FormsModule],
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
})
export class SearchComponent {
    searchQuery: string = '';
    @Output() searchEvent = new EventEmitter<string | null>();

    onSearch(): void {
        this.searchEvent.emit(this.searchQuery.trim() ? this.searchQuery : null);
    }
}
