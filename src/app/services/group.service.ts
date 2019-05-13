import { HttpClient } from '@angular/common/http';
import { IGroup } from '../interfaces/group';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class GroupService {

    private host: string;

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
}
