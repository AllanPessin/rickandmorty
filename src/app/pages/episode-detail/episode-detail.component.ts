import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from '../../components/card/card.component';
import { Character, CharacterService } from '../../service/character/character.service';
import { Episode, EpisodeService } from '../../service/episode/episode.service';
import { SkeletonCardComponent } from '../../components/skeleton-card/skeleton-card.component';
import { delay } from 'rxjs';

@Component({
    selector: 'app-episode-detail',
    imports: [CommonModule, FontAwesomeModule, CardComponent, SkeletonCardComponent],
    templateUrl: './episode-detail.component.html',
    styleUrl: './episode-detail.component.css',
})
export class EpisodeDetailComponent implements OnInit {
    faCircle = faCircle;
    episode: Episode | null = null;
    errorMessage: string | null = null;
    characters: Character[] = [];
    isLoading: boolean = false;

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
        this.isLoading = true;
        this.episodeService
            .getEpisodeById(id)
            .pipe(delay(300))
            .subscribe({
                next: (response: Episode): void => {
                    this.episode = response;
                    this.isLoading = false;

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
