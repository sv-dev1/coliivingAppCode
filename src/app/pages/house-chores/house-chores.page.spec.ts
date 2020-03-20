import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseChoresPage } from './house-chores.page';

describe('HouseChoresPage', () => {
  let component: HouseChoresPage;
  let fixture: ComponentFixture<HouseChoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseChoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseChoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
