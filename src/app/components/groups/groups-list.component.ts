import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { GroupService } from '../../services/group.service';
import { IGroup } from '../../app.models';
import { NewGroupComponent } from './new-group/new-group.component';

@Component({
    selector: 'app-groups-list',
    templateUrl: './groups-list.component.html',
    styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {

    public groups: Array<IGroup> = [];

    public displayedColumns: Array<string> = ['id', 'name', 'description', 'data_creation', 'edit', 'delete'];

    public group: IGroup;

    constructor(private groupService: GroupService,
                private dialog: MatDialog) { }

    public ngOnInit(): void {
        this.refreshGroups();
    }

    public openDialogWindow(): void {
        const dialogRef = this.dialog.open(
            NewGroupComponent,
            {
                width: '650px',
                data: {group: this.groups}
            }
            );

        dialogRef.afterClosed().subscribe((group: IGroup) => {
            this.refreshGroups();
        });
    }

    public deleteGroup(id: number): void {
        this.groupService.deleteGroup(id).subscribe(() => {
            this.groups = this.groups.filter((group: IGroup) => group.id !== id);
        });
    }

    private refreshGroups(): void {
        this.groupService.getGroups().subscribe((groups: Array<IGroup>) => {
            this.groups = groups;
        });
    }
}
