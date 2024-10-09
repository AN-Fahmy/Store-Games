import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent, title:'Home'},
  {path:'tiktactoe', loadComponent:()=>import('./components/tiktactoe/tiktactoe.component').then(c => c.TiktactoeComponent), title:"Tik Tac Toe"},
  {path:'memorygame', loadComponent:()=>import('./components/memorygame/memorygame.component').then(c => c.MemorygameComponent), title:"Memory Game"},
  {path:'**', loadComponent:()=> import('./components/notfound/notfound.component').then(c => c.NotfoundComponent), title:'Not Found'}
];
