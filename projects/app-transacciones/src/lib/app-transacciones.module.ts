import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppTransaccionesComponent } from './app-transacciones.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppTransaccionesComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [AppTransaccionesComponent]
})
export class AppTransaccionesModule { }
