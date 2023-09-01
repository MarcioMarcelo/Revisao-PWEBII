import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'cachorro', component:Pagina1Component},
  {path:'gato', component:Pagina2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
