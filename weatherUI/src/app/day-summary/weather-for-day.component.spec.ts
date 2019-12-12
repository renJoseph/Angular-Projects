import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForDayComponent } from './weather-for-day.component';

describe('WeatherForDayComponent', () => {
  let component: WeatherForDayComponent;
  let fixture: ComponentFixture<WeatherForDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherForDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
