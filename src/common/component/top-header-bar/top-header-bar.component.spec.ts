import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeaderBarComponent } from './top-header-bar.component';

describe('TopHeaderBarComponent', () => {
  let component: TopHeaderBarComponent;
  let fixture: ComponentFixture<TopHeaderBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHeaderBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
