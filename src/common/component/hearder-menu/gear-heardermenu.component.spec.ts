import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HearderMenuComponent } from './gear-heardermenu.component';

describe('HearderMenuComponent', () => {
  let component: HearderMenuComponent;
  let fixture: ComponentFixture<HearderMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HearderMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HearderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
