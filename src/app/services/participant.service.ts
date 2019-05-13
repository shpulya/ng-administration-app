import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IParticipant } from '../interfaces/participant';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ParticipantService {

    constructor(private http: HttpClient) { }


    public getUsers(): Observable<Array<IParticipant>> {
        return this.http.get<Array<IParticipant>>('http://localhost:3000/users');
    }

    public addUser(user: IParticipant): Observable<IParticipant> {
        return this.http.post<IParticipant>('http://localhost:3000/users', user);
    }

    public updateUser(id: number, user: IParticipant): Observable<IParticipant> {
        return this.http.put<IParticipant>('http://localhost:3000/users/' + id, user);
    }

    public deleteUser(id: number): Observable<IParticipant> {
        return this.http.delete<IParticipant>('http://localhost:3000/users/' + id);
    }
}
