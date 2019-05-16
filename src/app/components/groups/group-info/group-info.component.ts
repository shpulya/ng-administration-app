import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { GroupService } from '../../../services/group.service';
import { IGroup } from '../../../app.models';

@Component({
    selector: 'app-group-info',
    templateUrl: './group-info.component.html',
    styleUrls: ['./group-info.component.scss']
})
export class GroupInfoComponent implements OnInit {

    public groupForm: FormGroup;

    public groupId: number;

    public group: IGroup;

    public name: string = '';

    constructor(
        private route: ActivatedRoute,
        private groupService: GroupService
    ) {
        this.groupForm = new FormGroup({
            name: new FormControl(),
            description: new FormControl()
        });
    }

    public ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.groupId = parseInt(params['groupId'], 10);
        });

        this.groupService.getGroups().subscribe((groups: Array<IGroup>) => {
            this.group = groups.find((group: IGroup) => group.id === this.groupId);
            this.name = this.group.name.toUpperCase();
            this.groupForm.setValue({
                name: this.group.name,
                description: this.group.description
            });
        });
    }

    public onUpdate(): void {
        this.groupService.updateGroup(this.groupId, this.groupForm.value).subscribe();
    }
}
