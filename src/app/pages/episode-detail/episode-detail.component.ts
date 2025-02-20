import { Component, OnInit } from '@angular/core';
import { Episode, EpisodeService } from '../../service/episode.service';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse } from '../../service/character.service';

@Component({
    selector: 'app-episode-detail',
    imports: [],
    templateUrl: './episode-detail.component.html',
    styleUrl: './episode-detail.component.css',
})
export class EpisodeDetailComponent implements OnInit {
    episode: Episode | null = null;
    errorMessage: string | null = null;

    constructor(
        private episodeService: EpisodeService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const id: string | null = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.loadEpisodeById(+id);
        }
    }

    loadEpisodeById(id: number): void {
        this.episodeService.getEpisodeById(id).subscribe({
            next: (response: Episode): void => {
                this.episode = response;
            },
            error: (err: any): void => {
                this.errorMessage = err;
            },
        });
    }
}
