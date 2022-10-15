import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { InputPasswordComponent } from './input-password/input-password.component';



@NgModule({
  declarations: [
    InputComponent,
    InputPasswordComponent
  ],
  exports: [
    InputComponent,
    InputPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GovbrInputModule { }
