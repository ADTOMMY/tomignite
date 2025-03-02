import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CON010Component } from './con010.component';

describe('CON010Component', () => {
  let component: CON010Component;
  let fixture: ComponentFixture<CON010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CON010Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CON010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
