import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SidebarService} from '../service/sidebar.service';
import {LoginAuthService} from 'src/app/components/Login/Service/login-auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public loginuser:any = {};
  public user:any={};

  constructor(private router:Router, private sidebarService:SidebarService, private loginAuthService:LoginAuthService ) {
    this.loginAuthService.isLogeedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
    this.getUser();
   }

  ngOnInit() {
    
  }
  ListarCliente(){
    this.router.navigate(["listarCliente"]);
  }
  
  ListarProducto(){
    this.router.navigate(["listarProducto"]);
  }

  Venta(){
    this.router.navigate(["save-venta"]);
  }

  Cotizacion(){
    this.router.navigate(["cotizacionnew"]);
  }

  getUser(){
    this.sidebarService.getUser(this.loginuser.token).subscribe(user =>{
      this.user = user;
    })
  }
  
}
