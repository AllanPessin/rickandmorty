import { Component, OnInit } from '@angular/core';
import { Episode, EpisodeService } from '../../service/episode.service';
import { ApiResponse } from '../../service/character.service';
import { SearchComponent } from '../../components/search/search.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-episode-list',
    imports: [SearchComponent, PaginationComponent, RouterModule],
    templateUrl: './episode-list.component.html',
    styleUrl: './episode-list.component.css',
})
export class EpisodeListComponent implements OnInit {
    episodes: Episode[] = [];
    searchQuery: string = '';
    currentPage: number = 1;
    totalPages: number = 1;
    pageSize: number = 20;
    totalResults: number = 0;

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

    changePage(page: number): void {
        if (this.currentPage >= 1 && this.currentPage <= this.totalPages) {
            this.loadEpisodes();
        }
    }
}
