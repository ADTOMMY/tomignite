import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ART000Component } from './art000.component';

describe('ART000Component', () => {
  let component: ART000Component;
  let fixture: ComponentFixture<ART000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ART000Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ART000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
