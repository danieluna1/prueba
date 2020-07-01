import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorComponent } from './error/error.component';
import { DetailsProductComponent } from './product/details-product/details-product.component';


const routes: Routes = [
{path:'', component:HomepageComponent},
{path:'product/:id', component:DetailsProductComponent},
{path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
