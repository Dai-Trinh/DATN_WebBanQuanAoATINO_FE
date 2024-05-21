import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PaymentComponent } from './payment/payment.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { GioHangComponent } from './gio-hang/gio-hang.component';
import { ChiTietTinTucComponent } from './tin-tuc/chi-tiet-tin-tuc/chi-tiet-tin-tuc.component';
import { LoginComponent } from './login/login.component';

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
        path: 'list-product/:id',
        component: ListProductComponent,
      },
      {
        path: 'product-detail/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'new',
        component: TinTucComponent,
      },
      {
        path: 'new/detail/:id',
        component: ChiTietTinTucComponent,
      },
      {
        path: 'shopping-cart',
        component: GioHangComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
