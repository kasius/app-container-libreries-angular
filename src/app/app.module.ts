import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCreditosModule } from 'app-creditos';
import { AppHomeModule } from 'app-home';
import { AppTransaccionesModule } from 'app-transacciones';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppTransaccionesModule,
    AppHomeModule,
    AppCreditosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
