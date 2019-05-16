import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IParticipant } from '../app.models';


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

    public getUserById(id: number): IParticipant {
        let user: IParticipant = null;

        if (!this.getUsers()) {
            return null;
        } else {
            this.getUsers().subscribe((users: Array<IParticipant>) => {
                user = users.find((u: IParticipant) => u.id === id);
            });
        }

        return user;
    }

    public updateUser(id: number, user: IParticipant): Observable<IParticipant> {
        return this.http.put<IParticipant>('http://localhost:3000/users/' + id, user);
    }

    public deleteUser(id: number): Observable<IParticipant> {
        return this.http.delete<IParticipant>('http://localhost:3000/users/' + id);
    }
}
