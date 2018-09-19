import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2compComponent } from './day2comp.component';

describe('Day2compComponent', () => {
  let component: Day2compComponent;
  let fixture: ComponentFixture<Day2compComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day2compComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
