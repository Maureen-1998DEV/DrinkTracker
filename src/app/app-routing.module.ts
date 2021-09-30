import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinksFormComponent } from './drinks-form/drinks-form.component';
import { DrinksComponent } from './drinks/drinks.component';

const routes: Routes = [
{ path: 'Drinks', component: DrinksComponent},
{ path: 'Add Drinks', component: DrinksFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
