import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTotalComponentComponent } from './counter-total-component.component';

describe('CounterTotalComponentComponent', () => {
  let component: CounterTotalComponentComponent;
  let fixture: ComponentFixture<CounterTotalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterTotalComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTotalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
