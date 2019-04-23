import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscaHeroe',
  templateUrl: './buscaHeroe.component.html'
})
export class BuscaHeroeComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;
  constructor( private _activatedRoute:ActivatedRoute,
                private _heroesService:HeroesService,
                private _router:Router
              )
   { }

  ngOnInit()
  {
      this._activatedRoute.params.subscribe(params =>{
        console.log(params)
        this.termino = params['termino'];
        this.heroes = this._heroesService.buscarHeroes(params['termino']);
        //verifico y redirecciono al inicio
        //se agrego mensaje de alerta en pantalla
        //if(this.heroes.length == 0)
          //this._router.navigate(['/home']);
      });
  }

  verHeroe(idx:number)
  {
    this._router.navigate(['/heroe',idx])
      //console.log(idx);
  }

}
