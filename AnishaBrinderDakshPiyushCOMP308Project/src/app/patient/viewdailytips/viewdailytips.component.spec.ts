import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdailytipsComponent } from './viewdailytips.component';

describe('ViewdailytipsComponent', () => {
  let component: ViewdailytipsComponent;
  let fixture: ComponentFixture<ViewdailytipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdailytipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdailytipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
