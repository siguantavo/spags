import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private _router:Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino:string)
  {
    console.log('prueba ' + termino);
    if(termino != "")
      this._router.navigate(['/buscaHeroe',termino]);
  }

}
