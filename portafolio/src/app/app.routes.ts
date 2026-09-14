import { Routes } from '@angular/router';
import { Contacto as contacto } from './pages/contacto/contacto';
import { HojaVida } from './pages/hoja-vida/hoja-vida';
import { Inicio } from './pages/inicio/inicio';
import { Proyecto } from './pages/proyecto/proyecto';

export const routes: Routes = [
	{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
	{ path: 'inicio', component: Inicio },
	{ path: 'hoja-vida', component: HojaVida },
	{ path: 'proyecto', component: Proyecto },
	{ path: 'contacto', component: contacto },
	{ path: '**', redirectTo: 'inicio' },
];
