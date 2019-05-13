import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantsListComponent } from './components/participants/participants-list.component';
import { ParticipantInfoComponent } from './components/participants/participant-info/participant-info.component';
import { GroupsListComponent } from './components/groups/groups-list.component';
import { GroupInfoComponent } from './components/groups/group-info/group-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NewParticipantComponent } from './components/participants/new-participant/new-participant.component';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { NewGroupComponent } from './components/groups/new-group/new-group.component';


@NgModule({
    declarations: [
        AppComponent,
        ParticipantsListComponent,
        ParticipantInfoComponent,
        GroupsListComponent,
        GroupInfoComponent,
        NewParticipantComponent,
        NewGroupComponent
    ],
    entryComponents: [
        ParticipantsListComponent,
        NewParticipantComponent,
        NewGroupComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatNativeDateModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
