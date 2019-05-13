import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewParticipantComponent } from './new-participant.component';

describe('NewParticipantComponent', () => {
    let component: NewParticipantComponent;
    let fixture: ComponentFixture<NewParticipantComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ NewParticipantComponent ]
    })
    .compileComponents();
  }));

    beforeEach(() => {
      fixture = TestBed.createComponent(NewParticipantComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  });

    it('should create', () => {
      expect(component).toBeTruthy();
  });
});
