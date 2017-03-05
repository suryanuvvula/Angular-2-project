import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewanotherComponent } from './newanother.component';

describe('NewanotherComponent', () => {
  let component: NewanotherComponent;
  let fixture: ComponentFixture<NewanotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewanotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewanotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
