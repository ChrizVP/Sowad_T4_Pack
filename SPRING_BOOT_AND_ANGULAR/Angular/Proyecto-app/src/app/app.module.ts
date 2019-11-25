import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthGuard} from './auth.guard';

import { ListarClienteComponent } from './components/Cliente/listarCliente/listarCliente.component';
import { AddClienteComponent } from './components/Cliente/addCliente/addCliente.component';
import { EditClienteComponent } from './components/Cliente/editCliente/editCliente.component';

import { ListarProductoComponent } from './components/Producto/listarProducto/listarProducto.component';
import { AddProductoComponent } from './components/Producto/addProducto/addProducto.component';
import { EditProductoComponent } from './components/Producto/editProducto/editProducto.component';

import {FormsModule}from'@angular/forms';
import {ClienteService}from './components/Cliente/Service/Cliente.service';
import {ProductoService}from './components/Producto/Service/Producto.service';
import { LoginService } from './components/Login/Service/login.service';
import {LoginAuthService} from './components/Login/Service/login-auth.service';
import {AdmindashboardService} from './components/admindashboard/Service/admindashboard.service';
import {SidebarService} from './components/Share/sidebar/service/sidebar.service';
import {TopbarService} from './components/Share/topbar/service/topbar.service';
import { CotizacionnewService } from 'src/app/components/cotizacion/serviciow/cotizacionnew.service';

import {HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './components/Share/sidebar/sidebar/sidebar.component';
import { TopbarComponent } from './components/Share/topbar/topbar/topbar.component';
import { FooterComponent } from './components/Share/footer/footer.component';
import { LogoutModalComponent } from './components/Share/logout-modal/logout-modal.component';
import { PageContentComponent } from './components/Share/page-content/page-content.component';



import { LoginComponent } from './components/Login/Login/login.component';
import { HomeComponent } from './components/Share/home/home.component';
import { SignupComponent } from './components/admindashboard/signup/signup/signup.component';
import { UserDashboardComponent } from './components/userdashboard/userdashboard.component';
import { AdminDashboardComponent } from './components/admindashboard/admindashboard/admindashboard.component';
import { CotizacionnewComponent } from './components/cotizacion/contizacionnew/cotizacionnew/cotizacionnew.component';
import { AddcotizacionComponent } from './components/cotizacion/addcotizacion/addcotizacion/addcotizacion.component';
import { ReportcotizacionComponent } from './components/cotizacion/reportcotizacion/reportcotizacion/reportcotizacion.component';




@NgModule({
  declarations: [
    AppComponent,
    ListarClienteComponent,
    AddClienteComponent,
    EditClienteComponent,
    ListarProductoComponent,
    AddProductoComponent,
    EditProductoComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    LogoutModalComponent,
    PageContentComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    CotizacionnewComponent,
    AddcotizacionComponent,
    ReportcotizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClienteService,ProductoService,LoginService, AuthGuard,LoginAuthService,AdmindashboardService,SidebarService,TopbarService,CotizacionnewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
