import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CON000BodyComponent } from './con000-body.component';

describe('CON000BodyComponent', () => {
  let component: CON000BodyComponent;
  let fixture: ComponentFixture<CON000BodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CON000BodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CON000BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
