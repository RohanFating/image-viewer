import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UtilityModule } from './utility/utility.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UtilityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
