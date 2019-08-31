import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyfitPage } from './bodyfit.page';

describe('BodyfitPage', () => {
  let component: BodyfitPage;
  let fixture: ComponentFixture<BodyfitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyfitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyfitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
