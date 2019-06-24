import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTopBarComponent } from './top-header-bar.component';

describe('TopHeaderBarComponent', () => {
  let component: HeaderTopBarComponent;
  let fixture: ComponentFixture<HeaderTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
