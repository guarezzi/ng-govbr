import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderLinksComponent } from './header-links/header-links.component';
import { HeaderFunctionsComponent } from './header-functions/header-functions.component';
import { HeaderLoginComponent } from './header-login/header-login.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLinksComponent,
    HeaderFunctionsComponent,
    HeaderLoginComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GovbrHeaderModule { }
