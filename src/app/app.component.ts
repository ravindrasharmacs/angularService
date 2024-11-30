import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { HighlightDirective } from './highlight.directive';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ToolbarComponent } from './toolbar/toolbar.component';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
   // BrowserAnimationsModule,
    //RouterModule.forRoot(routes),
    ExampleComponent , 
    RouterOutlet , 
    HighlightDirective,
  ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'angularService';
}
