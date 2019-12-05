import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ClientAddComponent } from './components/client-add/client-add.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: '/clients', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: "clients", component: ClientListComponent, canActivate: [AuthGuard] },
  { path: "clients/:id/edit", component: ClientEditComponent, canActivate: [AuthGuard] },
  { path: "clients/create", component: ClientAddComponent, canActivate: [AuthGuard] },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
