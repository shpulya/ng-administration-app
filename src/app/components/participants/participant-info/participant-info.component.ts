import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { IParticipant } from '../../../app.models';
import { ParticipantService } from '../../../services/participant.service';

@Component({
    selector: 'app-participant-info',
    templateUrl: './participant-info.component.html',
    styleUrls: ['./participant-info.component.scss']
})
export class ParticipantInfoComponent implements OnInit {

    public userForm: FormGroup;

    public userId: number;

    public user: IParticipant;

    constructor(
        private route: ActivatedRoute,
        private userService: ParticipantService
    ) {
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

    public ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.userId = parseInt(params['userId'], 10);

        });

        this.userService.getUsers().subscribe((users: Array<IParticipant>) => {
            this.user = users.find((user: IParticipant) => user.id === this.userId);
            console.log(this.user);
            this.userForm.setValue({
                name: this.user.name,
                surname: this.user.surname,
                email: this.user.email,
                phone: this.user.phone
            });
        });

    }

    public onUpdate(): void {
        this.userService.updateUser(this.userId, this.userForm.value).subscribe();
    }
}
