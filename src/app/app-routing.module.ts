import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesaSenadoresComponent } from './modules/senators-expenses/senators-expenses.component';
import { ListaSenadoresComponent } from './modules/senators-list/senators-list.component';


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
