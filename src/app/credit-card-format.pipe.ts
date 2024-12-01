import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormat',
  standalone: true
})
export class CreditCardFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    // const cleanValue = value.replace(/[^\d]/g, '');
    const cleanValue = value.replace(/\D/g, '');

    const trucatedValue = cleanValue.slice(0, 16);
    const formattedValue = trucatedValue.replace(/(\d{4})(?=\d)/g, '$1 ');
    return formattedValue;

  }
}
