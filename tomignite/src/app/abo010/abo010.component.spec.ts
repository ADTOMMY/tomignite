import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABO010Component } from './abo010.component';

describe('ABO010Component', () => {
  let component: ABO010Component;
  let fixture: ComponentFixture<ABO010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ABO010Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABO010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
