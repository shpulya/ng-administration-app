import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IParticipant } from '../../../app.models';
import { ParticipantService } from '../../../services/participant.service';


@Component({
    selector: 'app-new-participants',
    templateUrl: './new-participant.component.html',
    styleUrls: ['./new-participant.component.scss']
})
export class NewParticipantComponent {

    public userForm: FormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA)
        public user: IParticipant,
        private matDialogRef: MatDialogRef<NewParticipantComponent>,
        private userService: ParticipantService) {

        this.userForm = new FormGroup({
            name: new FormControl('', Validators.required),
            surname: new FormControl('', Validators.required),
            email: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            phone: new FormControl('', [
                Validators.required,
                Validators.pattern(/^\+?([0-9]{2})[- (]?([0-9]{3})[- )]?([0-9]{3})[- ]?([0-9]{2})[- ]?([0-9]{2})$/)
            ])
        });
    }

    public onCancel(): void {
        this.matDialogRef.close();
    }

    public onCreate(): void {
        this.user = this.userForm.value;
        this.userService.addUser(this.user).subscribe(() => {
            this.userService.getUsers();
        });
    }

}
