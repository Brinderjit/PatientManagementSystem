import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsignsComponent } from './listsigns.component';

describe('ListsignsComponent', () => {
  let component: ListsignsComponent;
  let fixture: ComponentFixture<ListsignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
