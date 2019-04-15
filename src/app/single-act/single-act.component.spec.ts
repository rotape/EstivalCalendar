import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleActComponent } from './single-act.component';

describe('SingleActComponent', () => {
  let component: SingleActComponent;
  let fixture: ComponentFixture<SingleActComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleActComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
