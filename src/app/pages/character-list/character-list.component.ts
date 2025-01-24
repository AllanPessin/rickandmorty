import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Character, CharacterService } from '../../service/character.service';

@Component({
  selector: 'app-character-list',
  imports: [RouterModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  characters: Character[] = [];
  errorMessage: string | null = null;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.loadCharacters()
  }

  loadCharacters() {
    this.characterService.getCharacter().subscribe({
      next:(response) => {
        this.characters = response.results;
      },
      error: (err) => {
        this.errorMessage = err.message
      }
    })
  }
}
