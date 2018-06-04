import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalertsComponent } from './viewalerts.component';

describe('ViewalertsComponent', () => {
  let component: ViewalertsComponent;
  let fixture: ComponentFixture<ViewalertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewalertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
