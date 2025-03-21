import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { SearchComponent } from '../../components/search/search.component';
import { ApiResponse } from '../../service/character/character.service';
import { Episode, EpisodeService } from '../../service/episode/episode.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-episode-list',
    imports: [SearchComponent, PaginationComponent, RouterModule, CommonModule],
    templateUrl: './episode-list.component.html',
    styleUrl: './episode-list.component.css',
})
export class EpisodeListComponent implements OnInit {
    episodes: Episode[] = [];

    searchQuery: string = '';
    currentPage: number = 1;
    totalPages: number = 1;

    constructor(private episodeService: EpisodeService) {}

    ngOnInit(): void {
        this.loadEpisodes();
    }

    loadEpisodes() {
        this.episodeService.getEpisode(this.currentPage, this.searchQuery).subscribe({
            next: (response: ApiResponse<Episode>) => {
                this.totalPages = response.info.pages;
                this.episodes = response.results;
            },
        });
    }

    searchEpisode(query: string | null): void {
        this.searchQuery = query || '';
        this.currentPage = 1;
        this.loadEpisodes();
    }

    changePage(page: number) {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
            this.loadEpisodes();
        }
    }
}
