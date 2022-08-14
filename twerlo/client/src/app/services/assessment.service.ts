import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl: string = environment.api_domain

  getWords(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/words')
  }

  rank(score: number): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/rank', score)
  }
}
