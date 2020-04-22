import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAndLivingComponent } from './home-and-living/home-and-living.component';
import { MensShoesComponent } from './mens-shoes/mens-shoes.component';
import { WomensShoesComponent } from './womens-shoes/womens-shoes.component';
import { KidsShoesComponent } from './kids-shoes/kids-shoes.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeAndLivingComponent
  },
  {
    path: 'mens',
    component: MensShoesComponent
  },
  {
    path: 'womens',
    component: WomensShoesComponent
  },
  {
    path: 'kids',
    component: KidsShoesComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
