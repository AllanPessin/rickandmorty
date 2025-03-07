import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from '../../components/card/card.component';
import { Character, CharacterService } from '../../service/character/character.service';
import { Episode, EpisodeService } from '../../service/episode/episode.service';

@Component({
    selector: 'app-episode-detail',
    imports: [CommonModule, FontAwesomeModule, CardComponent],
    templateUrl: './episode-detail.component.html',
    styleUrl: './episode-detail.component.css',
})
export class EpisodeDetailComponent implements OnInit {
    faCircle = faCircle;
    episode: Episode | null = null;
    errorMessage: string | null = null;
    characters: Character[] = [];

    constructor(
        private episodeService: EpisodeService,
        private characterService: CharacterService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const id: string | null = this.route.snapshot.paramMap.get('id');
        if (!id) return;
        this.loadEpisodeById(+id);
    }

    loadEpisodeById(id: number): void {
        this.episodeService.getEpisodeById(id).subscribe({
            next: (response: Episode): void => {
                this.episode = response;

                if (this.episode.characters.length > 0) {
                    this.loadCharacters(this.episode.characters);
                }
            },
            error: (err: any): void => {
                this.errorMessage = err;
            },
        });
    }

    loadCharacters(characterUrl: string[]): void {
        const characterId = characterUrl.map((url) => url.split('/').pop()).join(',');

        this.characterService.getMultipleCharacter(characterId).subscribe({
            next: (response: Character[]): void => {
                this.characters = response;
            },
        });
    }
}
