import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IGroup, IParticipant } from '../app.models';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class GroupService {

    public users$: BehaviorSubject<Array<IParticipant>> = new BehaviorSubject<Array<IParticipant>>([]);
    
    private readonly host: string;


    constructor(private http: HttpClient) {
        this.host = environment.host;
    }

    public getGroups(): Observable<Array<IGroup>> {
        return this.http.get<Array<IGroup>>(this.host + 'groups');
    }

    public addGroup(group: IGroup): Observable<IGroup> {
        return this.http.post<IGroup>(this.host + 'groups', group);
    }

    public updateGroup(id: number, group: IGroup): Observable<IGroup> {
        return this.http.put<IGroup>(this.host + 'groups/' + id, group);
    }

    public deleteGroup(id: number): Observable<IGroup> {
        return this.http.delete<IGroup>(this.host + 'groups/' + id);
    }

    public addUserToGroup(user: IParticipant): void {
        const currentUsers: Array<IParticipant> = this.users$.getValue();
        currentUsers.push(user);
        this.users$.next(currentUsers);
    }

    public deleteUserFromGroup(user: IParticipant): void {
        const currentUsers: Array<IParticipant> = this.users$.getValue();
        currentUsers.splice(currentUsers.indexOf(user), 1);
        this.users$.next(currentUsers);
    }
}
