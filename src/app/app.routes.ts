import { Routes } from '@angular/router';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'personagens', component: CharacterListComponent },
    { path: 'personagens/:id', component: CharacterDetailComponent },
    {path: '**', redirectTo: '/'}

];
