import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IGroup} from '../interfaces/group';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) {
  }

  public getGroups(): Observable<Array<IGroup>> {
    return this.http.get<Array<IGroup>>('http://localhost:3000/groups');
  }
}
