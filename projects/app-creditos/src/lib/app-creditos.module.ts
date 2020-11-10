import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppCreditosComponent } from './app-creditos.component';
import { RouterModule } from '@angular/router';
import { CreditosComponent } from './creditos/creditos.component';
import { HistorialComponent } from './historial/historial.component';



@NgModule({
  declarations: [AppCreditosComponent, CreditosComponent, HistorialComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          children: [
            { path: '', redirectTo: 'credits', pathMatch: 'full' },
            { path: 'credits', pathMatch: 'full', component: CreditosComponent },
            { path: 'history', pathMatch: 'full', component: HistorialComponent }
          ]
        }
      ]
    )
  ],
  exports: [AppCreditosComponent]
})
export class AppCreditosModule { }
