import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP010P010Component } from './app010-p010.component';

describe('APP010P010Component', () => {
  let component: APP010P010Component;
  let fixture: ComponentFixture<APP010P010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [APP010P010Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APP010P010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
