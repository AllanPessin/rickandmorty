import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Character, CharacterService } from '../../service/character.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { NgFor } from '@angular/common';
import { ApiResponse } from '../../service/episode.service';
import { Subject } from 'rxjs';
import { SearchComponent } from '../../components/search/search.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { StatusTranslatePipe } from '../../pipe/translate/status-translate.pipe';

@Component({
  selector: 'app-character-list',
  imports: [
    RouterModule,
    FontAwesomeModule,
    NgFor,
    SearchComponent,
    PaginationComponent,
    StatusTranslatePipe
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent {
  faCircle = faCircle;
  characters: Character[] = [];
  errorMessage: string | null = null;

  currentPage: number = 1;
  totalPages: number = 1;
  pageSize: number = 20;
  totalResults: number = 0;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.characterService
      .getCharactersByPage(this.currentPage, this.pageSize)
      .subscribe({
        next: (response: ApiResponse<Character>): void => {
          console.log(response)
          this.characters = response.results;
          this.totalPages = response.info.pages;
          this.totalResults = response.info.count;
        },
        error: (err: any): void => {
          this.errorMessage = err.message;
        },
      });
  }

  searchCharacter(query: string): void {
    if (!query.trim()) {
      this.currentPage = 1;
      this.loadCharacters();
      return;
    }

    this.characterService.searchCharacter(query).subscribe({
      next: (response: ApiResponse<Character>): void => {
        this.characters = response.results;
        this.totalPages = response.info.pages;
        this.totalResults = response.info.count;
        this.currentPage = 1;
      },
      error: (err: any): void => {
        this.errorMessage = err.message;
      },
    });
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadCharacters();
    }
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.currentPage = 1;
    this.loadCharacters();
  }
}
