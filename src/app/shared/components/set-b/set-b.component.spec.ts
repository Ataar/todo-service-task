import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetBComponent } from './set-b.component';

describe('SetBComponent', () => {
  let component: SetBComponent;
  let fixture: ComponentFixture<SetBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
