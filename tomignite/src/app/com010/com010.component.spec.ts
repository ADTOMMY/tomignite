import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COM010Component } from './com010.component';

describe('COM010Component', () => {
  let component: COM010Component;
  let fixture: ComponentFixture<COM010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [COM010Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(COM010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
