import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABO000Component } from './abo000.component';

describe('ABO000Component', () => {
  let component: ABO000Component;
  let fixture: ComponentFixture<ABO000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ABO000Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABO000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
