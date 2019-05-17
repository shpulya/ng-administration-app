import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IGroup } from '../../../app.models';
import { GroupService } from '../../../services/group.service';

@Component({
    selector: 'app-new-group',
    templateUrl: './new-group.component.html',
    styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent {

    public groupForm: FormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA)
        public group: IGroup,
        private matDialogRef: MatDialogRef<NewGroupComponent>,
        private groupService: GroupService) {

        this.groupForm = new FormGroup({
            name: new FormControl('', Validators.required),
            description: new FormControl()
        });
    }

    public onCancel(): void {
        this.matDialogRef.close();
    }

    public onCreate(): void {
        const today = new Date();

        this.group = this.groupForm.value;
        this.group.data_creation = today;
        this.groupService.addGroup(this.group).subscribe(() => {
            this.groupService.getGroups();
        });
    }
}
