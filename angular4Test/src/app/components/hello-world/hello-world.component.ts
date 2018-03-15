import { Component, OnInit ,ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UserModel } from '../../models/user-model.model';
import { AuthService } from "../../service/auth.service";

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  host: { class: 'lhl' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloWorldComponent implements OnInit {
  /**
   * 此处是声明，不是初始化，这就像 var users;所以users还是Undefined
   */
  users: UserModel[];
  styleNames;
  powers:string[];
  thisTel:string;
  thisName:string;
  thsiPower:string;

  counter: number = 0;


  constructor(private auth_service: AuthService,private cdRef: ChangeDetectorRef) {
    //初始化users，——所以不能在这里写this.users.push();因为users还未初始化
    this.users = [];
    //初始化styleNames
    this.styleNames = { 
      class1: true, 
      class2: true, 
      class3: false 
    };
    this.powers=["超人","蝙蝠侠","钢铁侠"];
    setInterval(() => {
      this.counter++;
      this.cdRef.markForCheck();
  }, 1000);
  }

  ngOnInit() {
    console.log("hello-world组件ngOnInit");
  }

  addUser(nameDom, telDom) {
    this.users.push(new UserModel(nameDom.value, parseInt(telDom.value)));
    console.log(this.users[0].userName);
  }

  onSubmit(data: any) {
    console.log("提交的数据是：");
    console.log(data);
  }

  login(name, password) {
    this.auth_service.login(name, password);
  };

  loginOut() {
    this.auth_service.loginOut();
  };

  keyupEvent(domObj:any,eventObj:any){
    console.log(domObj);
    console.log(eventObj);
  }    

  submitForm(){
    console.log("数据已经被提交了");
  }

}
