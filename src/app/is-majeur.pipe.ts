import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isMajeur'
})
export class IsMajeurPipe implements PipeTransform {

  transform(param_age: number): string {
    if (param_age < 18) {
      return "La personne est mineure";
    }
    else {
      return "La personne est majeur";
    }
  }
}
