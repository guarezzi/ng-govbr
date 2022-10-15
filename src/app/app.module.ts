import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GovbrComponentsModule } from './govbr-components/govbr-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GovbrComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
