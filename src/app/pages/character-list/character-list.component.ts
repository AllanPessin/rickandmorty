import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Character, CharacterService } from '../../service/character.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { NgFor } from '@angular/common';
import { ApiResponse } from '../../service/episode.service';
import { Subject } from 'rxjs';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-character-list',
  imports: [RouterModule, FontAwesomeModule, NgFor, SearchComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent {
  faCircle = faCircle;
  characters: Character[] = [];
  errorMessage: string | null = null;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.characterService.getCharacter().subscribe({
      next: (response: ApiResponse<Character>): void => {
        this.characters = response.results;
      },
      error: (err: any): void => {
        this.errorMessage = err.message;
      },
    });
  }

  searchCharacter(query: string): void {
    if (!query.trim()) {
      this.loadCharacters();
      return;
    }

    this.characterService.searchCharacter(query).subscribe({
      next: (response: ApiResponse<Character>): void => {
        this.characters = response.results;
      },
      error: (err: any): void => {
        this.errorMessage = err.message;
      },
    });
  }
}
