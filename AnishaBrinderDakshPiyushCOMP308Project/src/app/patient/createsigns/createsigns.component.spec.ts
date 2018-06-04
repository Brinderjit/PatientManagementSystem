import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesignsComponent } from './createsigns.component';

describe('CreatesignsComponent', () => {
  let component: CreatesignsComponent;
  let fixture: ComponentFixture<CreatesignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
