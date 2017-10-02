import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPassComponent } from './input-pass.component';

describe('InputPassComponent', () => {
  let component: InputPassComponent;
  let fixture: ComponentFixture<InputPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
