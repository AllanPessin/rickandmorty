import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character, CharacterService } from '../../service/character.service';

@Component({
    selector: 'app-character-detail',
    imports: [],
    templateUrl: './character-detail.component.html',
    styleUrl: './character-detail.component.css',
})
export class CharacterDetailComponent {
    character: Character | null = null;
    errorMessage: string | null = null;

    constructor(
        private characterService: CharacterService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const id: string | null = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.loadCharacterById(+id);
        }
    }

    loadCharacterById(id: number): void {
        this.characterService.getCharacterById(id).subscribe({
            next: (response: Character): void => {
                this.character = response;
            },
            error: (err: any): any => {
                return (this.errorMessage = err);
            },
        });
    }
}
