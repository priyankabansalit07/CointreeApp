import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DataComponent} from "./data/data.component";

import { DataResolver} from "./_resolver/data.resolver";

const routes: Routes = [
  {path: 'data',component:DataComponent,  resolve: { coins: DataResolver }},
  { path: '', redirectTo: '/data', pathMatch: 'full' },
  { path: '**', redirectTo: 'data', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
