import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{path:'', redirectTo:'/login', pathMatch:'full'},
	{path: 'login', component:LoginComponent},
	{path: 'home', component:HomeComponent},
	
];

// export class Routing {
// 	RouterModule.forRoot(routes); 
// } 

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class RoutingModule{}