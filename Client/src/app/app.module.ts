import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataComponent } from './data/data.component';
import { BTCPipe } from './_pipe/BTC.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    BTCPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [BTCPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
