import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject , Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.restful-api.dev/objects';
  private dataSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient)  { }

//Method to get data from API
fetchData(): Observable<any> {
  return this.http.get<any>(this.apiUrl).pipe(
    map(response => {
      this.dataSubject.next(response);
      return response;
    })
  );    
}

//Method to get data from BehaviorSubject
getData(): Observable<any> {
  return this.dataSubject.asObservable(); 
}
//Method to update data in BehaviorSubject  
updateData(newData: any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/data`, newData).pipe(
    map(response => {
      this.dataSubject.next(response);
      return response;
    })
  );  
}
}
