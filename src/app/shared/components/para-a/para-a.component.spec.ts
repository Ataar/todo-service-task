import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaAComponent } from './para-a.component';

describe('ParaAComponent', () => {
  let component: ParaAComponent;
  let fixture: ComponentFixture<ParaAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParaAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
