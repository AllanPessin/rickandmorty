import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'statusTranslate',
})
export class StatusTranslatePipe implements PipeTransform {
    transform(value: string): string {
        const translations: { [key: string]: string } = {
            Alive: 'Vivo',
            Dead: 'Morto',
            unknown: 'Desconhecido',
        };

        return translations[value] || 'Desconhecido';
    }
}
