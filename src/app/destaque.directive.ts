import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDestaque]'
})
export class DestaqueDirective implements OnInit {

  @HostBinding('style.backgroundColor') corDeFundo: string;

  constructor() { }

  ngOnInit() {
    // this.corDeFundo = 'red';
  }

  @HostListener('mouseover') aoPassarMouse() {
    this.corDeFundo = 'gray';
  }

  @HostListener('mouseout') aoRetirarMouse() {
    this.corDeFundo = 'transparent';
  }
}
