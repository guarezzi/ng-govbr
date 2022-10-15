import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GovbrFooterModule } from './govbr-footer/govbr-footer.module';
import { GovbrBreadcrumbModule } from './govbr-breadcrumb/govbr-breadcrumb.module';
import { GovbrCardModule } from './govbr-card/govbr-card.module';
import { GovbrInputModule } from './govbr-input/govbr-input.module';
import { GovbrMenuModule } from './govbr-menu/govbr-menu.module';
import { GovbrHeaderModule } from './govbr-header/govbr-header.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GovbrFooterModule,
    GovbrBreadcrumbModule,
    GovbrCardModule,
    GovbrInputModule,
    GovbrMenuModule,
    GovbrHeaderModule
  ],
  exports: [
    GovbrFooterModule,
    GovbrBreadcrumbModule,
    GovbrCardModule,
    GovbrInputModule,
    GovbrMenuModule,
    GovbrHeaderModule
  ]
})
export class GovbrComponentsModule { }
