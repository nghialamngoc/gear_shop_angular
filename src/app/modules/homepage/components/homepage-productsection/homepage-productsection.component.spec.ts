import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageProductSectionComponent } from './homepage-productsection.component';

describe('HomepageProductsectionComponent', () => {
  let component: HomePageProductSectionComponent;
  let fixture: ComponentFixture<HomePageProductSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageProductSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
