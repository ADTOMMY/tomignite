import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABO010P010Component } from './abo010-p010.component';

describe('ABO010P010Component', () => {
  let component: ABO010P010Component;
  let fixture: ComponentFixture<ABO010P010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ABO010P010Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABO010P010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
