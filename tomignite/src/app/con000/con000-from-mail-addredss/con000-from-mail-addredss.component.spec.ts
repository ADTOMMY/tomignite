import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CON000FromMailAddredssComponent } from './con000-from-mail-addredss.component';

describe('CON000FromMailAddredssComponent', () => {
  let component: CON000FromMailAddredssComponent;
  let fixture: ComponentFixture<CON000FromMailAddredssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CON000FromMailAddredssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CON000FromMailAddredssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
