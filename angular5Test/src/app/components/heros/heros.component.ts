import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero-model';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../../service/hero.service';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  title="Tour of heroes";
  heroes:Hero[];
  selectedHero:Hero;
  routeID:string;
  constructor(private heroService:HeroService) { 
    
    heroService.getHeros().then((data)=>{
      this.heroes=data;
    });
  }

  ngOnInit() {
    
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
const childRouter:Routes=[
  {
    path:':id',
    component:HeroDetailComponent
  }
];
export {childRouter}
