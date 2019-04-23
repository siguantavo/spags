import { Component, OnInit } from '@angular/core';
//usando el servicio
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

//usnado el servicio
  constructor(private _heroesService:HeroesService,
            private _router:Router) {


  }

//para cuando la pagina ya esta renderizada, y constructor se ejecuta antaes
  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  verHeroe(idx:number)
  {
    this._router.navigate(['/heroe',idx])
      //console.log(idx);
  }
}
