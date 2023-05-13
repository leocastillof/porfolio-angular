import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aboutme } from '../model/aboutme';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  URL = environment.URL + 'aboutme/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Aboutme[]>{
    return this.httpClient.get<Aboutme[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<Aboutme>{
    return this.httpClient.get<Aboutme>(this.URL + `detail/${id}`);
  }

  public save(aboutme: Aboutme): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', aboutme);
  }

  public update(id: number, aboutme: Aboutme): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, aboutme);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
