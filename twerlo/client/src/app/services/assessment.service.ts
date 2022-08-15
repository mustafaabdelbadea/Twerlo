import { rankInputs, rankOutput, word, wordOutput } from './types/assessment.type';
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

  getWords(): Observable<wordOutput> {
    return this.httpClient.get<wordOutput>(this.baseUrl + '/words')
  }

  rank(score: rankInputs): Observable<rankOutput> {
    return this.httpClient.post<rankOutput>(this.baseUrl + '/rank', score)
  }
}
