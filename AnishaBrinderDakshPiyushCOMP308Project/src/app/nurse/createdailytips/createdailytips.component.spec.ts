import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedailytipsComponent } from './createdailytips.component';

describe('CreatedailytipsComponent', () => {
  let component: CreatedailytipsComponent;
  let fixture: ComponentFixture<CreatedailytipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedailytipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedailytipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
