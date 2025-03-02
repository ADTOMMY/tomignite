import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ART010Component } from './art010.component';

describe('ART010Component', () => {
  let component: ART010Component;
  let fixture: ComponentFixture<ART010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ART010Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ART010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
