import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COM010P010Component } from './com010-p010.component';

describe('COM010P010Component', () => {
  let component: COM010P010Component;
  let fixture: ComponentFixture<COM010P010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [COM010P010Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(COM010P010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
