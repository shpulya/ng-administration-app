import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ParticipantsListComponent} from './components/participants-list/participants-list.component';
import {ParticipantInfoComponent} from './components/participant-info/participant-info.component';
import {GroupsListComponent} from './components/groups-list/groups-list.component';
import {GroupInfoComponent} from './components/group-info/group-info.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule, MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ParticipantsListComponent,
    ParticipantInfoComponent,
    GroupsListComponent,
    GroupInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
