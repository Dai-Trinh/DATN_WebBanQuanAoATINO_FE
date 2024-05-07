import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NgZorroModuleExport } from '../../shared/modules/ng-zorro.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentCommonModule } from '../../shared/component-common.module';
import { AdminComponent } from './admin.component';
import { MenuComponent } from '../../setting/menu.component';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    DashboardExpenseComponent,
    AdminComponent,
    MenuComponent,
    DashboardExpenseComponent,
    DashboardRevenueComponent,
    DashboardProfitComponent,
    InformationBannerComponent,
    InformationShopComponent,
    InformationNewsComponent,
    ProductInformationComponent,
    ProductNewComponent,
    CategoryParentComponent,
    CategoryChildrenComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroModuleExport,
    TranslateModule,
    ComponentCommonModule,
    FormsModule,
  ],
})
export class AdminModule {}
