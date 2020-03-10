import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Description1Page } from './description1.page';

describe('Description1Page', () => {
  let component: Description1Page;
  let fixture: ComponentFixture<Description1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Description1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Description1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
