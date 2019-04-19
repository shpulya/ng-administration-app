import { Component, OnInit } from '@angular/core';
import {GroupService} from '../../services/group.service';
import {IGroup} from '../../interfaces/group';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
  public groups: Array<IGroup> = [];
  public displayedColumns: string[] = ['id', 'name', 'description', 'data_creation'];

  constructor(private groupService: GroupService) { }

  public ngOnInit(): void {
    this.groupService.getGroups().subscribe((groups: Array<IGroup>) => {
      this.groups = groups;
    });
  }

  public openDialogWindow(): void {
    this.groupService.addGroup().subscribe(() => {});
  }

}
