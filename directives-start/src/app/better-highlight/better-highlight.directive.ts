import { 
  Directive,
  ElementRef, 
  HostBinding, 
  HostListener, 
  Input,
  OnInit, 
  Renderer2, } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  constructor(private elRef:ElementRef, private renderer:Renderer2) { }
  // making the directive dynamic
  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'blue';

  ngOnInit(): void {
    //  this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }
  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent'

  @HostListener('mouseenter') mouseOver(eventData:Event){
    //  this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData:Event){
    //  this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }
}
