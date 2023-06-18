import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataDisplayComponent } from './data-display/data-display.component'

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }