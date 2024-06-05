import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnesComponent } from './personnes/personnes.component';
import { HomeComponent } from './home/home.component';
import { AddPersonneComponent } from './add-personne/add-personne.component';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: 'employees', component: PersonnesComponent, canActivate: [AuthGuard] },
  { path: 'employees', component: PersonnesComponent},
  { path: 'home', component: HomeComponent},
  { path: 'addpersonne', component: AddPersonneComponent },
  { path: 'updatepersonne', component: UpdatePersonneComponent},
  { path: 'login', component: LoginComponent },

  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'employees'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
