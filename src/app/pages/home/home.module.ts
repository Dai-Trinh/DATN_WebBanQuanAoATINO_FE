import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NgZorroModuleExport } from '../../shared/modules/ng-zorro.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentCommonModule } from '../../shared/component-common.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroModuleExport,
    TranslateModule,
    ComponentCommonModule,
  ],
})
export class HomeModule {}
