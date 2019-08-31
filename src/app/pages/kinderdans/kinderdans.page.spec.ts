import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinderdansPage } from './kinderdans.page';

describe('KinderdansPage', () => {
  let component: KinderdansPage;
  let fixture: ComponentFixture<KinderdansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinderdansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinderdansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
