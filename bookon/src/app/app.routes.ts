import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Register } from './components/register/register';
import { Note } from './components/note/note';
import { About } from './components/about/about';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'register', component: Register },
  { path: 'note', component: Note },
  { path: 'about', component: About },
];
