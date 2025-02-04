import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-pagination',
    imports: [FormsModule, FontAwesomeModule],
    templateUrl: './pagination.component.html',
    styleUrl: './pagination.component.css',
})
export class PaginationComponent {
    @Input() currentPage: number = 1;
    @Input() totalPages: number = 1;
    @Input() pageSizeOptions: number[] = [10, 20, 30];
    @Input() pageSize: number = 10;
    @Output() pageChange = new EventEmitter<number>();
    @Output() pageSizeChange = new EventEmitter<number>();

    faChevronRight = faChevronRight;
    faChevronLeft = faChevronLeft;

    onPageChange(page: number) {
        if (page >= 1 && page <= this.totalPages) {
            this.pageChange.emit(page);
        }
    }
}
