import { Routes } from '@angular/router';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { EpisodeDetailComponent } from './pages/episode-detail/episode-detail.component';
import { EpisodeListComponent } from './pages/episode-list/episode-list.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationDateilsComponent } from './pages/location-dateils/location-dateils.component';
import { LocationListComponent } from './pages/location-list/location-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'personagens', component: CharacterListComponent },
    { path: 'personagens/:id', component: CharacterDetailComponent },
    { path: 'episodios', component: EpisodeListComponent },
    { path: 'episodios/:id', component: EpisodeDetailComponent },
    { path: 'localizacoes', component: LocationListComponent },
    { path: 'localizacoes/:id', component: LocationDateilsComponent },
    { path: '**', redirectTo: '/' },
];
