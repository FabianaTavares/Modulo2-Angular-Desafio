import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ListaSenadoresComponent } from './lista-senadores/lista-senadores.component';
import { DespesaSenadoresComponent } from './despesa-senadores/despesa-senadores.component';
import { TipoPipe } from './tipo.pipe';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ListaSenadoresComponent,
    DespesaSenadoresComponent,
    TipoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
