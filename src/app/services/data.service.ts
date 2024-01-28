import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employer } from '../models/employer';

const baseUrl = 'https://retoolapi.dev/HYd96h/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Employer[]> {
    return this.http.get<Employer[]>(baseUrl);
  }
}
