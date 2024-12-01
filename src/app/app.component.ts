import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { HighlightDirective } from './highlight.directive';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './accordion/accordion.component';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
   // BrowserAnimationsModule,
    //RouterModule.forRoot(routes),
    ExampleComponent , 
    RouterOutlet , 
    HighlightDirective,
  ToolbarComponent,
  CardComponent,
AccordionComponent,
CreditCardInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'angularService';
}
