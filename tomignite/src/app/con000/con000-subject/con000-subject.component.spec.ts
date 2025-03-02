import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CON000SubjectComponent } from './con000-subject.component';

describe('CON000SubjectComponent', () => {
  let component: CON000SubjectComponent;
  let fixture: ComponentFixture<CON000SubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CON000SubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CON000SubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
