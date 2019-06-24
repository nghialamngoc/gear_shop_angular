import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageModule } from './modules/homepage/module/homepage.module';
import { HeaderTopBannerComponent } from 'src/common/component/header-top-banner/top-banner.component';
import { HeaderContentSessionComponent } from 'src/common/component/header-content-session/header.component';
import { FooterComponent } from 'src/common/component/footer/footer.component';

@NgModule({
  declarations: [    
    AppComponent,
    HeaderTopBannerComponent,
    HeaderContentSessionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
