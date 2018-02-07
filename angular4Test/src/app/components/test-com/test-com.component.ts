import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-com',
  templateUrl: './test-com.component.html',
  styleUrls: ['./test-com.component.css']
})
export class TestComComponent implements OnInit {
  myName:string;
  dataArray:Array<string>;
  friendArray:string[];

  constructor() { 
    /**
     * 直接在模板中用{{myName}}
     */
    this.myName="李红磊";
    this.dataArray=["a","b"];
    this.friendArray=["乔布斯","mark"];
  }

  ngOnInit() {
  }

}
