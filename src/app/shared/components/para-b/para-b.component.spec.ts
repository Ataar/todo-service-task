import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaBComponent } from './para-b.component';

describe('ParaBComponent', () => {
  let component: ParaBComponent;
  let fixture: ComponentFixture<ParaBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParaBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParaBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
