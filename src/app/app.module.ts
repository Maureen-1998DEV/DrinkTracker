import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinksFormComponent } from './drinks-form/drinks-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DrinksComponent } from './drinks/drinks.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinksFormComponent,
    NavbarComponent,
    DrinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
