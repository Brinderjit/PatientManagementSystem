import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomcheckComponent } from './symptomcheck.component';

describe('SymptomcheckComponent', () => {
  let component: SymptomcheckComponent;
  let fixture: ComponentFixture<SymptomcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
