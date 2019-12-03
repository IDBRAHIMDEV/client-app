import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ClientAddComponent } from './components/client-add/client-add.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: '/clients', pathMatch: 'full' },
  { path: "clients", component: ClientListComponent },
  { path: "clients/create", component: ClientAddComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
