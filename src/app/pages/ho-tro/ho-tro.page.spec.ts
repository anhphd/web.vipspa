import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoTroPage } from './ho-tro.page';

describe('HoTroPage', () => {
  let component: HoTroPage;
  let fixture: ComponentFixture<HoTroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoTroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoTroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
