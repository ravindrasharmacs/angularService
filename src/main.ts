import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Adjust the path if necessary
import { provideRouter } from '@angular/router'; // Import provideRouter
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import necessary functions
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Use provideRouter instead of RouterModule.forRoot
    provideHttpClient(withFetch()) // Enable fetch support here
  ]
})
.catch(err => console.error(err));
