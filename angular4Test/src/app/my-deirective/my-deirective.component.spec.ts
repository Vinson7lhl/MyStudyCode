import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDeirectiveComponent } from './my-deirective.component';

describe('MyDeirectiveComponent', () => {
  let component: MyDeirectiveComponent;
  let fixture: ComponentFixture<MyDeirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDeirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDeirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
