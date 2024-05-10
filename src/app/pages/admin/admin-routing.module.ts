import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardExpenseComponent } from './dashboard-expense/dashboard-expense.component';
import { DashboardRevenueComponent } from './dashboard-revenue/dashboard-revenue.component';
import { DashboardProfitComponent } from './dashboard-profit/dashboard-profit.component';
import { InformationBannerComponent } from './information-banner/information-banner.component';
import { InformationShopComponent } from './information-shop/information-shop.component';
import { InformationNewsComponent } from './information-news/information-news.component';
import { ProductInformationComponent } from './product-information/product-information.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { CategoryParentComponent } from './category-parent/category-parent.component';
import { CategoryChildrenComponent } from './category-children/category-children.component';
import { ProductReadComponent } from './product-information/product-read/product-read.component';
import { ProductAddComponent } from './product-information/product-add/product-add.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard/expense',
        component: DashboardExpenseComponent,
      },
      {
        path: 'dashboard/revenue',
        component: DashboardRevenueComponent,
      },
      {
        path: 'dashboard/profit',
        component: DashboardProfitComponent,
      },
      {
        path: 'information/banner',
        component: InformationBannerComponent,
      },
      {
        path: 'information/shop',
        component: InformationShopComponent,
      },
      {
        path: 'information/news',
        component: InformationNewsComponent,
      },
      {
        path: 'product/information',
        component: ProductInformationComponent,
      },
      {
        path: 'product/information/create',
        component: ProductAddComponent
      },
      {
        path: 'product/new',
        component: ProductNewComponent,
      },
      {
        path: 'category/parent',
        component: CategoryParentComponent,
      },
      {
        path: 'category/children',
        component: CategoryChildrenComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
