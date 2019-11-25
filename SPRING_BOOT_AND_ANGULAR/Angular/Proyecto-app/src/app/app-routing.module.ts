import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarClienteComponent } from './components/Cliente/listarCliente/listarCliente.component';
import { AddClienteComponent } from './components/Cliente/addCliente/addCliente.component';
import { EditClienteComponent } from './components/Cliente/editCliente/editCliente.component';

import { ListarProductoComponent } from './components/Producto/listarProducto/listarProducto.component';
import { AddProductoComponent } from './components/Producto/addProducto/addProducto.component';
import { EditProductoComponent } from './components/Producto/editProducto/editProducto.component';

import { CotizacionnewComponent } from 'src/app/components/cotizacion/contizacionnew/cotizacionnew/cotizacionnew.component';
import { AddcotizacionComponent } from '../app/components/cotizacion/addcotizacion/addcotizacion/addcotizacion.component';
import { ReportcotizacionComponent } from '../app/components/cotizacion/reportcotizacion/reportcotizacion/reportcotizacion.component';


import { LoginComponent } from './components/Login/Login/login.component';
import { HomeComponent } from './components/Share/home/home.component';
import {AuthGuard} from'./auth.guard';
import { SignupComponent } from './components/admindashboard/signup/signup/signup.component';
import { AdminDashboardComponent } from './components/admindashboard/admindashboard/admindashboard.component';
import { UserDashboardComponent } from './components/userdashboard/userdashboard.component';


const routes: Routes = [

  {path:'listarCliente',component:ListarClienteComponent, canActivate:[AuthGuard]},
  {path:'addCliente',component:AddClienteComponent, canActivate:[AuthGuard]},
  {path:'editCliente',component:EditClienteComponent, canActivate:[AuthGuard]},
  
  {path:'listarProducto',component:ListarProductoComponent, canActivate:[AuthGuard]},
  {path:'addProducto',component:AddProductoComponent, canActivate:[AuthGuard]},
  {path:'editProducto',component:EditProductoComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent, canActivate:[AuthGuard]},
  {path: 'signup', component:SignupComponent, canActivate:[AuthGuard]},
  {path: 'admindashboard', component:AdminDashboardComponent, canActivate:[AuthGuard]},
  {path: 'userdashboard', component:UserDashboardComponent, canActivate:[AuthGuard]},
  {path: 'cotizacionnew', component:CotizacionnewComponent, canActivate:[AuthGuard]},
  {path: 'addcotizacion', component:AddcotizacionComponent, canActivate:[AuthGuard]},
  {path: 'reportcotizacion', component:ReportcotizacionComponent, canActivate:[AuthGuard]},
  
  {path:'**',pathMatch:'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
