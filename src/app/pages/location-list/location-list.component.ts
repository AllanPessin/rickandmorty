import { Component, OnInit } from '@angular/core';
import { Location, LocationService } from '../../service/location/location.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiResponse } from '../../service/character/character.service';
import { CardComponent } from '../../components/card/card.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
    selector: 'app-location-list',
    imports: [CommonModule, RouterLink, PaginationComponent],
    templateUrl: './location-list.component.html',
    styleUrl: './location-list.component.css',
})
export class LocationListComponent implements OnInit {
    locations: Location[] = [];

    currentPage: number = 1;
    totalPages: number = 1;

    constructor(private locationService: LocationService) {}

    ngOnInit() {
        this.loadLocations();
    }

    loadLocations() {
        this.locationService.getLocation().subscribe({
            next: (response: ApiResponse<Location>) => {
                this.locations = response.results;
            },
        });
    }

    changePage(page: number) {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
            this.loadLocations();
        }
    }
}
