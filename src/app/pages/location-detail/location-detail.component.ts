import { Component, OnInit } from '@angular/core';
import { Location, LocationService } from '../../service/location/location.service';
import { Character, CharacterService } from '../../service/character/character.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';

@Component({
    selector: 'app-location-detail',
    imports: [CommonModule, CardComponent],
    templateUrl: './location-detail.component.html',
    styleUrl: './location-detail.component.css',
})
export class LocationDetailComponent implements OnInit {
    location: Location | null = null;
    characters: Character[] = [];

    constructor(
        private locationService: LocationService,
        private characterService: CharacterService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const id: string | null = this.route.snapshot.paramMap.get('id');
        if (!id) return;
        this.loadLocationById(+id);
    }

    loadLocationById(id: number): void {
        this.locationService.getLocationById(id).subscribe({
            next: (response: Location): void => {
                this.location = response;

                if (this.location.residents.length > 0) {
                    this.loadCharacters(this.location.residents);
                }
            },
        });
    }

    loadCharacters(characterUrl: string[]): void {
        const characterId = characterUrl.map((url) => url.split('/').pop()).join(',');

        this.characterService.getMultipleCharacter(characterId).subscribe({
            next: (response: Character[]): void => {
                this.characters = Array.isArray(response) ? response : [response];
            },
        });
    }
}
