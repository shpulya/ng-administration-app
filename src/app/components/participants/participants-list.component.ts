import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../../services/participant.service';
import { IParticipant } from '../../interfaces/participant';
import { MatDialog } from '@angular/material';
import { NewParticipantComponent } from './new-participant/new-participant.component';

@Component({
    selector: 'app-participants-list',
    templateUrl: './participants-list.component.html',
    styleUrls: ['./participants-list.component.scss']
})
export class ParticipantsListComponent implements OnInit {

    public users: Array<IParticipant> = [];

    public displayedColumns: Array<string> = ['id', 'name', 'surname', 'email', 'phone', 'groupId', 'delete'];

    public user: IParticipant;

    constructor(private participantsServer: ParticipantService, public dialog: MatDialog) { }

    public ngOnInit(): void {
        this.refreshUsers();
    }

    public openDialogWindow(): void {
        const dialogRef = this.dialog.open(NewParticipantComponent, {
            width: '650px',
            data: {user: this.user}
        });

        dialogRef.afterClosed().subscribe((user: IParticipant) => {
            this.user = user;
            console.log('new user', this.user);
            this.participantsServer.addUser(this.user).subscribe(() => {
                this.refreshUsers();
            });
        });
    }

    public deleteUser(id: number): void {
        this.participantsServer.deleteUser(id).subscribe(() => {
            this.users = this.users.filter((user: IParticipant) => user.id !== id);
        });
    }

    private refreshUsers(): void {
        this.participantsServer.getUsers().subscribe((users: Array<IParticipant>) => {
            this.users = users;
        });
    }

}
