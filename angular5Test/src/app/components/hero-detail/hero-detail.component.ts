import { Component, OnInit ,Input } from '@angular/core';
import { Hero } from '../../models/hero-model';

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() thisHero:Hero
  constructor(private linkParam:ActivatedRoute) { 
    console.log(this.linkParam.paramMap);
    this.linkParam.paramMap.subscribe(res=>{
      console.log("参数为："+res["id"]);
    });
  }

  ngOnInit() {
  }

}
