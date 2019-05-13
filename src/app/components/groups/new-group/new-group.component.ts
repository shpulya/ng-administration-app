import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IGroup } from '../../../interfaces/group';

@Component({
    selector: 'app-new-group',
    templateUrl: './new-group.component.html',
    styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent {

    constructor(
        private matDialogRef: MatDialogRef<NewGroupComponent>,
        @Inject(MAT_DIALOG_DATA) public group: IGroup) { }

    public onNoClick(): void {
        this.matDialogRef.close();
    }
}
