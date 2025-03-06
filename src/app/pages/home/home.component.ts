import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
    ApiResponse,
    Character,
    CharacterService,
} from '../../service/character/character.service';

@Component({
    selector: 'app-home',
    imports: [CardComponent, NgFor],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    characters: Character[] = [];

    constructor(private characterService: CharacterService) {}

    ngOnInit(): void {
        this.loadRandomCharacters();
    }

    loadRandomCharacters() {
        this.characterService.getMultipleCharacter(this.listIdGenerate()).subscribe({
            next: (response: Character[]): void => {
                this.characters = response;
            },
        });
    }

    listIdGenerate() {
        let num = new Set();
        while (num.size < 6) {
            num.add(Math.floor(Math.random() * 826) + 1);
        }
        return Array.from(num).join(',');
    }
}
