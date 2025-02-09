import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-nav-link',
    imports: [RouterModule],
    templateUrl: './nav-link.component.html',
    styleUrl: './nav-link.component.css',
})
export class NavLinkComponent {
    @Input() link: string = '';
    @Input() label: string = '';
}
