import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP010Component } from './app010.component';

describe('APP010Component', () => {
  let component: APP010Component;
  let fixture: ComponentFixture<APP010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [APP010Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APP010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
