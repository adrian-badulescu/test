import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Business1Component } from './business1/business1.component';
import { Business2Component } from './business2/business2.component';
import { Business3Component } from './business3/business3.component';
import { Business4Component } from './business4/business4.component';
import { Business5Component } from './business5/business5.component';
import { Business6Component } from './business6/business6.component';
import { Business7Component } from './business7/business7.component';
import { Business8Component } from './business8/business8.component';
import { Business9Component } from './business9/business9.component';
import { Business10Component } from './business10/business10.component';

@NgModule({
  declarations: [
    AppComponent,
    Business1Component,
    Business2Component,
    Business3Component,
    Business4Component,
    Business5Component,
    Business6Component,
    Business7Component,
    Business8Component,
    Business9Component,
    Business10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
