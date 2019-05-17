import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IParticipant } from '../app.models';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ParticipantService {

    private readonly host: string;

    constructor(private http: HttpClient) {
        this.host = environment.host;
    }

    public getUsers(): Observable<Array<IParticipant>> {
        return this.http.get<Array<IParticipant>>(`${this.host}users`);
    }

    public addUser(user: IParticipant): Observable<IParticipant> {
        return this.http.post<IParticipant>(`${this.host}users`, user);
    }

    public updateUser(id: number, user: IParticipant): Observable<IParticipant> {
        return this.http.put<IParticipant>(`${this.host}users${id}`, user);
    }

    public deleteUser(id: number): Observable<IParticipant> {
        return this.http.delete<IParticipant>(`${this.host}users${id}`);
    }
}
