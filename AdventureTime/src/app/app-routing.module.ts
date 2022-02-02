import { ContactComponent } from './contact/contact.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: 'HomeComponent', pathMatch: 'full'},
  {path:'Home', component: HomeComponent},
  {path:'Personajes', component: CharactersComponent},
  {path:'Contacto', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
