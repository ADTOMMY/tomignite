import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ART010P010Component } from './art010-p010.component';

describe('ART010P010Component', () => {
  let component: ART010P010Component;
  let fixture: ComponentFixture<ART010P010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ART010P010Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ART010P010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
