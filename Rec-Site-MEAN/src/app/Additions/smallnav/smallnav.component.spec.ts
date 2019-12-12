import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallnavComponent } from './smallnav.component';

describe('SmallnavComponent', () => {
  let component: SmallnavComponent;
  let fixture: ComponentFixture<SmallnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
