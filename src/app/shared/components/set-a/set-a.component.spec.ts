import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAComponent } from './set-a.component';

describe('SetAComponent', () => {
  let component: SetAComponent;
  let fixture: ComponentFixture<SetAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
