import { Routes } from '@angular/router';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'personagens', component: CharacterListComponent },
    { path: 'personagens/:id', component: CharacterDetailComponent },
    { path: 'localizacoes', component: CharacterListComponent },
    { path: 'episodios', component: CharacterListComponent },
    { path: '**', redirectTo: '/' },
];
