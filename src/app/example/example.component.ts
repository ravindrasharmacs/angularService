import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent implements OnInit {
  private dataService = inject(DataService);
  data$: Observable<any> = this.dataService.getData();

  ngOnInit(): void {
    this.data$ = this.dataService.getData();
    this.dataService.fetchData().subscribe({
      error: (err) => console.error('Error fetching data', err)
    });
  }

  updateData() {
    const newData = { title: 'New Title', body: 'New Body' };
    this.dataService.updateData(newData).subscribe({
      next: (response) => console.log('Data updated successfully', response),
      error: (err) => console.error('Error updating data', err),
    });
  }
}
