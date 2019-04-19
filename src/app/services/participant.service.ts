import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IParticipant} from '../interfaces/participant';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http: HttpClient) { }


  public getUsers(): Observable<Array<IParticipant>> {
    return this.http.get<Array<IParticipant>>('http://localhost:3000/users');
  }

  public addUser():   Observable<Array<IParticipant>> {
    return this.http.post<Array<IParticipant>>('http://localhost:3000/users', { 'name': 'dff', 'surname': 'gjhgjh', 'email': '' });
  }
}
