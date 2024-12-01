import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreditCardFormatPipe } from '../credit-card-format.pipe';

@Component({
  selector: 'app-credit-card-input',
  standalone: true,
  imports: [FormsModule , CreditCardFormatPipe],
  templateUrl: './credit-card-input.component.html',
  styleUrl: './credit-card-input.component.scss'
})
export class CreditCardInputComponent {
creditCardNumber: string = '';

onInput(){
  this.creditCardNumber = this.creditCardNumber.replace(/[^\d]/g, '');
}
}
