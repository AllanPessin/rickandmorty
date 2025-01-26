import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavLinkComponent } from '../../nav-link/nav-link.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule, NavLinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  imagePath: string = '/assets/images/logo.png';

  navLinks: Array<{label: string, link: string}> = [
    { label: 'Personagens', link: '/personagens'},
    { label: 'Localizações', link: '/localizacoes'},
    { label: 'Episódios', link: '/episodios'},
  ]
}
