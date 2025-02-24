import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FilterComponent } from '../../components/filter/filter.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { SearchComponent } from '../../components/search/search.component';
import { StatusTranslatePipe } from '../../pipe/translate/status-translate.pipe';
import { Character, CharacterService } from '../../service/character.service';
import { ApiResponse } from '../../service/episode.service';

@Component({
    selector: 'app-character-list',
    imports: [
        RouterModule,
        FontAwesomeModule,
        NgFor,
        SearchComponent,
        PaginationComponent,
        StatusTranslatePipe,
        FilterComponent,
    ],
    templateUrl: './character-list.component.html',
    styleUrl: './character-list.component.css',
})
export class CharacterListComponent implements OnInit {
    faCircle = faCircle;
    characters: Character[] = [];
    errorMessage: string | null = null;

    currentPage: number = 1;
    totalPages: number = 1;

    selectedStatus: string = '';
    searchQuery: string = '';
    gender: string = '';

    constructor(
        private characterService: CharacterService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            if (params['gender']) {
                this.gender = params['gender'];
            }
            this.loadCharacters();
        });
    }

    loadCharacters(): void {
        this.characterService
            .getCharacters(
                undefined,
                this.searchQuery,
                this.currentPage,
                this.selectedStatus,
                undefined,
                undefined,
                this.gender
            )
            .subscribe({
                next: (response: ApiResponse<Character>): void => {
                    this.characters = response.results;
                    this.totalPages = response.info.pages;
                },
                error: (err: any): void => {
                    this.errorMessage = err.message;
                },
            });
    }

    searchCharacter(query: string | null): void {
        this.searchQuery = query || '';
        this.currentPage = 1;
        this.loadCharacters();
    }

    changePage(page: number) {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
            this.loadCharacters();
        }
    }

    filterStatus(status: string) {
        this.selectedStatus = status;
        this.currentPage = 1;
        this.loadCharacters();
    }

    filterGender(gender: string): void {
        this.gender = gender;
        this.currentPage = 1;
        this.loadCharacters();
    }
}
