import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersByGroupComponent } from './users-by-group.component';

describe('UsersByGroupComponent', () => {
  let component: UsersByGroupComponent;
  let fixture: ComponentFixture<UsersByGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersByGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersByGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
