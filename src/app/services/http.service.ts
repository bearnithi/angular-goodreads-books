import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  goodReadsKey: string = "P0icIlIIWSU2q5mTuUzepA";

  constructor(private http: HttpClient) { }

  searchBooks(searchParams?: any) {

    return this.http.get(`http://localhost:3000?q=${searchParams.filter}&page=${searchParams.page}&key=${this.goodReadsKey}`)
  }
}
