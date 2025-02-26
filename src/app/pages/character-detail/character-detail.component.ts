import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { StatusTranslatePipe } from '../../pipe/translate/status-translate.pipe';
import { Character, CharacterService } from '../../service/character/character.service';

@Component({
    selector: 'app-character-detail',
    imports: [FontAwesomeModule, StatusTranslatePipe, CommonModule, RouterModule],
    templateUrl: './character-detail.component.html',
    styleUrl: './character-detail.component.css',
})
export class CharacterDetailComponent {
    character: Character | null = null;
    errorMessage: string | null = null;
    faCircle = faCircle;

    numberOfEpisodes: number = 5;

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

    loadMoreEpisodes() {
        this.numberOfEpisodes++;
    }
}
