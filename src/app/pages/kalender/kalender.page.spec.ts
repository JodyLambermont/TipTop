import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KalenderPage } from './kalender.page';

describe('KalenderPage', () => {
  let component: KalenderPage;
  let fixture: ComponentFixture<KalenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalenderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
