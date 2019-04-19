import { Component, OnInit } from '@angular/core';
import {ParticipantService} from '../../services/participant.service';
import {IParticipant} from '../../interfaces/participant';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.scss']
})
export class ParticipantsListComponent implements OnInit {
  public users: Array<IParticipant> = [];
  public displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'phone', 'group'];

  constructor(private participantsServer: ParticipantService) { }

  public ngOnInit(): void {
    this.participantsServer.getUsers().subscribe((users: Array<IParticipant>) => {
      this.users = users;
    });
  }

  public openDialogWindow(): void {
    this.participantsServer.addUser().subscribe(() => {});
  }

}
