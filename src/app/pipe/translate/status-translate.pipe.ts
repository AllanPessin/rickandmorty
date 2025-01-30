import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTranslate',
})
export class StatusTranslatePipe implements PipeTransform {
  transform(value: string): string {
    // const translations: { [key: string]: string } = {
    //   alive: 'Vivo',
    //   dead: 'Morto',
    //   unknown: 'Desconhecido',
    // };

    // return translations[value];

    const translate: { [key: string]: string} = {
        alive: "Vivo",
        dead: "Morto",
        unknow: "Desconhecido",
    }

    return translate[value];
  }
}
