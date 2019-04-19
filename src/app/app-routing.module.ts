import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParticipantsListComponent} from './components/participants-list/participants-list.component';
import {ParticipantInfoComponent} from './components/participant-info/participant-info.component';
import {GroupsListComponent} from './components/groups-list/groups-list.component';
import {GroupInfoComponent} from './components/group-info/group-info.component';

const routes: Routes = [
  {
    path: 'users',
    component: ParticipantsListComponent
  },
  {
    path: 'users/:userId',
    component: ParticipantInfoComponent
  },
  {
    path: 'groups',
    component: GroupsListComponent
  },
  {
    path: 'groups/:groupsId',
    component: GroupInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
