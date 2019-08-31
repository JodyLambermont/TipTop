import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaratePage } from './karate.page';

describe('KaratePage', () => {
  let component: KaratePage;
  let fixture: ComponentFixture<KaratePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaratePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
