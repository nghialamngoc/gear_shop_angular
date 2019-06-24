import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContentSessionComponent } from './header.component';

describe('HeaderContentSessionComponent', () => {
  let component: HeaderContentSessionComponent;
  let fixture: ComponentFixture<HeaderContentSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderContentSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderContentSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
