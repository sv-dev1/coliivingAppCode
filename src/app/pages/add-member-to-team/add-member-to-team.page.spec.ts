import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemberToTeamPage } from './add-member-to-team.page';

describe('AddMemberToTeamPage', () => {
  let component: AddMemberToTeamPage;
  let fixture: ComponentFixture<AddMemberToTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMemberToTeamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMemberToTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
