import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { StatusTranslatePipe } from '../../pipe/translate/status-translate.pipe';

@Component({
    selector: 'app-card',
    imports: [RouterLink, FontAwesomeModule, StatusTranslatePipe],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent {
    @Input() character: any;
    faCircle = faCircle;
}
