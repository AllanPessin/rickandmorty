import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLinkComponent } from '../nav-link/nav-link.component';

@Component({
    selector: 'app-header',
    imports: [RouterModule, NavLinkComponent, FontAwesomeModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
    faBars = faBars;
    faTimes = faTimes;
    imagePath: string = '/assets/images/logo.png';
    isMenuOpen: boolean = false;

    navLinks: Array<{ label: string; link: string }> = [
        { label: 'Personagens', link: '/personagens' },
        { label: 'Localizações', link: '/localizacoes' },
        { label: 'Episódios', link: '/episodios' },
    ];

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
