import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({selector:"[myHighlight]"})
export class MyDeirectiveComponent{

  constructor(private el:ElementRef) { 
    //el.nativeElement.style.backgroundColor="red";
  }
  @Input("myHighlight") highLightColor:string;
  @HostListener("mouseenter") onmouseenter(){
    this.changeColor(this.highLightColor || "red");
  }
  @HostListener("mouseleave") onmouseLeave(){
    this.changeColor(null);
  }
  private changeColor(color:string){
    this.el.nativeElement.style.backgroundColor=color;
  }
}
