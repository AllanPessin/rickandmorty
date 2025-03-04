import { Routes } from '@angular/router';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { HomeComponent } from './pages/home/home.component';
import { EpisodeListComponent } from './pages/episode-list/episode-list.component';
import { EpisodeDetailComponent } from './pages/episode-detail/episode-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'personagens', component: CharacterListComponent },
    { path: 'personagens/:id', component: CharacterDetailComponent },
    { path: 'episodios', component: EpisodeListComponent },
    { path: 'episodios/:id', component: EpisodeDetailComponent },
    { path: 'localizacoes', component: CharacterListComponent },
    { path: '**', redirectTo: '/' },
];
