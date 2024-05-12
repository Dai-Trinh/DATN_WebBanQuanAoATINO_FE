import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PaymentComponent } from './payment/payment.component';
import { ListProductComponent } from './list-product/list-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home-page',
        component: HomePageComponent,
      },
      {
        path: 'payment',
        component: PaymentComponent,
      },
      {
        path: 'list-product',
        component: ListProductComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
