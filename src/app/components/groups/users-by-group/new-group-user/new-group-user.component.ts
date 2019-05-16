import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { IParticipant } from '../../../../app.models';
import { ParticipantService } from '../../../../services/participant.service';
import { GroupService } from '../../../../services/group.service';

@Component({
    selector: 'app-new-group-user',
    templateUrl: './new-group-user.component.html',
    styleUrls: ['./new-group-user.component.scss']
})
export class NewGroupUserComponent implements OnInit {

    public users: Array<IParticipant>;

    constructor(
        private matDialogRef: MatDialogRef<NewGroupUserComponent>,
        private usersService: ParticipantService,
        private groupService: GroupService
    ) {
    }

    public ngOnInit(): void {
        this.usersService.getUsers().subscribe((users: Array<IParticipant>) => {
            this.users = users;
        });
    }

    public onAdd(userId: number): void {
        this.usersService.getUsers().subscribe((users: Array<IParticipant>) => {
            const user = users.find((u: IParticipant) => u.id === userId);
            this.groupService.addUserToGroup(user);
        });

        this.matDialogRef.close();
    }

    public onClose(): void {
        this.matDialogRef.close();
    }
}
