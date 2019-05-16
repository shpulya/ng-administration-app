import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialog } from '@angular/material';

import { IGroup, IParticipant } from '../../../app.models';
import { GroupService } from '../../../services/group.service';
import { NewGroupUserComponent } from './new-group-user/new-group-user.component';

@Component({
    selector: 'app-users-by-group',
    templateUrl: './users-by-group.component.html',
    styleUrls: ['./users-by-group.component.scss']
})
export class UsersByGroupComponent implements OnInit {

    public users: Array<IParticipant>;

    public groupId: number;

    public name: string;

    public displayedColumns: Array<string> = ['name', 'surname', 'email', 'phone', 'delete'];
    
    constructor(
        private groupService: GroupService,
        private route: ActivatedRoute,
        private dialog: MatDialog
    ) { }

    public ngOnInit(): void {

        this.route.params.subscribe((params: Params) => {
            this.groupId = parseInt(params['groupId'], 10);
        });

        this.groupService.getGroups().subscribe((groups: Array<IGroup>) => {
            this.name = groups.find((group: IGroup) => group.id === this.groupId).name;
        });

        this.refreshGroup();
    }

    public openDialogWindow(): void {
        const dialogRef = this.dialog.open(
            NewGroupUserComponent,
            {
                width: '650px',
                data: {user: this.users}
            }
        );

        dialogRef.afterClosed().subscribe((user: IParticipant) => {
            this.refreshGroup();
        });
    }

    public deleteUser(user: IParticipant): void {
        this.groupService.deleteUserFromGroup(user);
    }

    private refreshGroup(): void {
        this.groupService.users$.subscribe((users: Array<IParticipant>) => {
            this.users = [...users];
            console.log(users);
        });
    }
}
