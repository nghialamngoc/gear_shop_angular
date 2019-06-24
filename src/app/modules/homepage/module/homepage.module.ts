import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Components
import { HomePageComponent } from "../components/homepage/homepage.component";
import { HomePageProductSectionComponent } from "../components/homepage-productsection/homepage-productsection.component";
import { HearderMenuComponent } from 'src/common/component/hearder-menu/gear-heardermenu.component';
import { HeaderTopBarComponent } from 'src/common/component/header-top-bar/top-header-bar.component';
import { SubCatBannerComponent } from 'src/common/component/sub-cat-banner/sub-cat-banner.component';
import { FeaturedProductComponent } from '../components/featured-product/featured-product.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HomePageProductSectionComponent,
    HeaderTopBarComponent,
    HearderMenuComponent,
    SubCatBannerComponent,
    FeaturedProductComponent
  ],
  imports: [CommonModule],
  providers: [],
  exports: [
    HomePageComponent    
  ]
})
export class HomePageModule {}
