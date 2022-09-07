import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interface/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent implements OnInit {

  constructor(private heroesServices: HeroesService) { }

  heroes: Heroe[] = [];

  ngOnInit(): void {
    this.heroesServices.getHeroes()
    .subscribe( heroes => {this.heroes = heroes;});
  }

}
