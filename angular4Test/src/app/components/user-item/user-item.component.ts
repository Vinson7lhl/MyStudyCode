import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
  host:{
    class:"lhl"
  }
})
export class UserItemComponent implements OnInit {
  //@Input声明received_name这是从父级组件传递过来的数据
  @Input() received_name:string;
  @Input() received_name_index:number;

  constructor() {
    console.log("user-list-item组件-构造器");
  }

  ngOnInit() {
    console.log("user-list-item组件-初始化");
  }

}
