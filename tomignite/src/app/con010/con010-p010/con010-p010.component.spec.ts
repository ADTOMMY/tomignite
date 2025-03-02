import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CON010P010Component } from './con010-p010.component';

describe('CON010P010Component', () => {
  let component: CON010P010Component;
  let fixture: ComponentFixture<CON010P010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CON010P010Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CON010P010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
