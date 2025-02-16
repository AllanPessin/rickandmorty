import { Component, OnInit } from '@angular/core';
import { Episode, EpisodeService } from '../../service/episode.service';
import { ApiResponse } from '../../service/character.service';
import { SearchComponent } from '../../components/search/search.component';

@Component({
    selector: 'app-episode-list',
    imports: [SearchComponent],
    templateUrl: './episode-list.component.html',
    styleUrl: './episode-list.component.css',
})
export class EpisodeListComponent implements OnInit {
    episodes: Episode[] = [];
    searchQuery: string = '';
    constructor(private episodeService: EpisodeService) {}

    ngOnInit(): void {
        this.loadEpisodes();
    }

    loadEpisodes() {
        this.episodeService.getEpisode().subscribe({
            next: (response: ApiResponse<Episode>) => {
                console.log(response);
                this.episodes = response.results;
            },
        });
    }

    searchEpisode(query: string | null): void {
        this.searchQuery = query || '';
        this.loadEpisodes();
    }
}
