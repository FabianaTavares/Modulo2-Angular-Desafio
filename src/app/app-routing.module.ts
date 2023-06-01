import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesaSenadoresComponent } from './despesa-senadores/despesa-senadores.component';
import { ListaSenadoresComponent } from './lista-senadores/lista-senadores.component';


const routes: Routes = [
  { path: 'senadores', component: ListaSenadoresComponent },
  { path: '', redirectTo: 'senadores', pathMatch: 'full' },
  { path: 'senadores/:id', component: DespesaSenadoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
