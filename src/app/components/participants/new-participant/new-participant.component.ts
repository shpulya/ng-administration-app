import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ParticipantsListComponent } from '../participants-list.component';
import { IParticipant } from '../../../interfaces/participant';

@Component({
    selector: 'app-new-participants',
    templateUrl: './new-participant.component.html',
    styleUrls: ['./new-participant.component.scss']
})
export class NewParticipantComponent {

    constructor(
        public dialogRef: MatDialogRef<ParticipantsListComponent>,
        @Inject(MAT_DIALOG_DATA) public user: IParticipant) {
    }

    public onNoClick(): void {
        this.dialogRef.close();
    }

}
