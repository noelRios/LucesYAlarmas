import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router:Router) {}

  cerrar(){
    window.localStorage.setItem('sesion','')
    this.router.navigate(['login']);
  }
}
