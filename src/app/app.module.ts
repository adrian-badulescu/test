import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BusinessComponent } from './business/business.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BusinessComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
