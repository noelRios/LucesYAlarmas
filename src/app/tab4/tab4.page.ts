import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { producto } from './producto';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
/*
  url= "http://apiproductos.somee.com/api/productos";
  clave:string;
  nombre:string;
  precio:number;
  productos:producto[];
  pro:producto;
  constructor(private http:HttpClient) 
  {
    this.llenarGrid();
  }*/

  ngOnInit() {
  }

  /*buscar()
  {
    this.http.get<producto>(this.url + "/" + this.clave).subscribe(resp=>{
      this.pro=resp;
      this.clave=this.pro.Pro_Cve;
      this.nombre = this.pro.Pro_Nombre;
      this.precio = this.pro.Pro_Precio;
    })
  }

  llenarGrid()
  {
    this.http.get<producto[]>(this.url).subscribe(resp=>{
      this.productos=resp;
    })
  }

  guardar()
  {
    let miProducto = 
    {
      Pro_Cve:this.clave,
      Pro_Nombre:this.nombre,
      Pro_precio:this.precio
    }
    this.http.post(this.url,miProducto).subscribe(data => 
    {
      console.log(data ['_body'])
    }, error => 
    {
      console.log(error);
    }
    );
    this.llenarGrid();
    this.llenarGrid();
  }

  limpiar()
  {
    this.clave="";
    this.nombre="";
    this.precio=0;
    this.llenarGrid();
  }

  borrar()
  {
    this.http.delete(this.url + "/" + this.clave).subscribe(data => {
      console.log(data["_body"])
    }, error =>{
      console.log(error);
    }
    );
    this.llenarGrid();
    this.llenarGrid();
  }*/
}

