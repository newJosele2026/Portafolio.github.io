import { Routes } from '@angular/router';
import { Comunicacion } from './pages/comunicacion/comunicacion';
import { HojaVida } from './pages/hoja-vida/hoja-vida';
import { Inicio } from './pages/inicio/inicio';
import { Proyecto } from './pages/proyecto/proyecto';

export const routes: Routes = [
	{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
	{ path: 'inicio', component: Inicio },
	{ path: 'hoja-vida', component: HojaVida },
	{ path: 'proyecto', component: Proyecto },
	{ path: 'comunicacion', component: Comunicacion },
	{ path: '**', redirectTo: 'inicio' },
];
