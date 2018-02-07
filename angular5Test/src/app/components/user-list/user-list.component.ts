import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  //另一种写法是：names:Array<string>
  names:string[];
  constructor() {
    console.log("user-list组件-构造器");
    this.names=["Steve Jobs","Bill Gates","曹操","Allen kay"];
  }

  ngOnInit() {
    console.log("user-list组件-初始化");
  }
  getName(inputDOM){
    console.log(inputDOM.value);
  }
}
