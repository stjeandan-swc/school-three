import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CategoriesComponent } from './categories/categories.component';
import { InfoComponent } from './info/info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeAndLivingComponent } from './home-and-living/home-and-living.component';
import { MensShoesComponent } from './mens-shoes/mens-shoes.component';
import { WomensShoesComponent } from './womens-shoes/womens-shoes.component';
import { KidsShoesComponent } from './kids-shoes/kids-shoes.component';

@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    SideMenuComponent,
    BreadcrumbComponent,
    CategoriesComponent,
    InfoComponent,
    NavbarComponent,
    HomeAndLivingComponent,
    MensShoesComponent,
    WomensShoesComponent,
    KidsShoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
