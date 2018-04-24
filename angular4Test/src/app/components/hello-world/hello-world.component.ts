import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UserModel } from '../../models/user-model.model';
import { AuthService } from '../../service/auth.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloWorldComponent implements OnInit {
  /**
   * 此处是声明，不是初始化，这就像 var users;所以users还是Undefined
   */
  users: UserModel[];
  styleNames;
  powers: string[];
  thisTel: string;
  thisName: string;
  thsiPower: string;
  counter: number;
  objTest: object;

  /**
   * Observable 对象
   */
  observable_obj: Observable<any>;
  subject_obj: Subject<any>;


  constructor(
    private auth_service: AuthService,
    private cdRef: ChangeDetectorRef) {
    console.log('构造器初始化');
  }

  ngOnInit() {
    this.counter = 0;
    this.objTest = { name: '张飞' };
    // 初始化users，——所以不能在这里写this.users.push();因为users还未初始化
    this.users = [
      { userName: 'lhl', userTel: 123 },
      { userName: 'dds', userTel: 133 }];
    // 初始化styleNames
    this.styleNames = {
      class1: true,
      class2: true,
      class3: false
    };
    this.powers = ['超人', '蝙蝠侠', '钢铁侠'];
    setInterval(() => {
      this.counter++;
      this.cdRef.markForCheck();
    }, 1000);
    /**
     * init Observable obj
     */
    this.observervableInit('str1');
    this.observableGetData();
    console.log('ngOnInit初始化完毕');
    /**
     * init subject
     */
    this.subject_obj = new Subject();
    this.subjectSetData('initData');
    this.subjectGetData();
  }

  observervableInit(str: string) {
    this.observable_obj = new Observable(observer => {
      observer.next(str);
    });
  }

  observableGetData() {
    this.observable_obj.subscribe(res => {
      console.log('订阅回调在执行');
      console.log(res);
    });
  }

  subjectSetData(str: string) {
    console.log('subject 设置数据');
    this.subject_obj.next(str);
  }
  subjectGetData() {
    console.log('subject 获取数据');
    this.subject_obj.subscribe(res => {
      console.log('subject获取数据为：' + res);
    });
  }


  addUser(nameDom, telDom: any) {
    this.users.push(new UserModel(nameDom.value, parseInt(telDom.value)));
  }

  onSubmit(data: any) {
    console.log('提交的数据是：');
    console.log(data);
  }

  login(name, password) {
    this.auth_service.login(name, password);
  };

  loginOut() {
    this.auth_service.loginOut();
  };

  keyupEvent(domObj: any, eventObj: any) {
    console.log(domObj);
    console.log(eventObj);
  }

  submitForm() {
    console.log('数据已经被提交了');
  }

}
