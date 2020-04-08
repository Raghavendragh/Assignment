import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbookingsComponent } from './newbookings.component';

describe('NewbookingsComponent', () => {
  let component: NewbookingsComponent;
  let fixture: ComponentFixture<NewbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
