import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppHomeComponent } from './app-home.component';



@NgModule({
  declarations: [AppHomeComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [AppHomeComponent]
})
export class AppHomeModule { }
