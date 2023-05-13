import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceExperience {
  URL = environment.URL + 'exp/';
  
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<Experience>{
    return this.httpClient.get<Experience>(this.URL + `detail/${id}`);
  }

  public save(experience: Experience): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', experience);
  }

  public update(id: number, experience: Experience): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, experience);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
