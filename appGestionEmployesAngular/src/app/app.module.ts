import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddPersonneComponent } from './add-personne/add-personne.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { UppercaseInputDirective } from './directives/uppercase-input.directive';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonnesComponent,
    HeaderComponent,
    HomeComponent,
    AddPersonneComponent,
    UpdatePersonneComponent,
    UppercasePipe,
    UppercaseInputDirective,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
