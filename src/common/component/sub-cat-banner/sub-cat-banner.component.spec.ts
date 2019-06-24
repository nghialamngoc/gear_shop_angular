import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCatBannerComponent } from './sub-cat-banner.component';

describe('SubCatBannerComponent', () => {
  let component: SubCatBannerComponent;
  let fixture: ComponentFixture<SubCatBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCatBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCatBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
