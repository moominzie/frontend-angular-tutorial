import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  // template: '<h2> Hello World </h2> <p>Have a good day!</p>',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  @Input() contentText: string = "";
  @Input() content: string = "";

  @Output() toggelBtnEvent: EventEmitter<number> = new EventEmitter();

  @Output() contentRecieve: EventEmitter<string> = new EventEmitter();

  object: any = undefined;

  classCSS = {
    'color': false,
    'size' : false
  }

  styleCSS = {
    'font-size' : '18px',
    'color' : 'lightblue'
  }



  txt = "Text1";
  price = 150000;
  count:number = 1;
  numberString = "12345";
  example = {
    firstname: "methawee",
    surname: "atthawan"
  }
  contentTest: string = "Content test from child";

  constructor() { }

  ngOnInit(): void {
  }

  displayText() {
    return this.txt;
  }

  toggelBtn() {
    this.toggelBtnEvent.emit(this.count++)
  }

  sendText() {
    this.contentRecieve.emit(this.contentTest);
  }

  toggleColor() {
    this.classCSS.color = !this.classCSS.color;
  }
  toggleSize() {
    this.classCSS.size = !this.classCSS.size;
  }
  toggleStyleSize() {
    // this.styleCSS['font-size'] = !this.styleCSS['font-size'] 
    };

}
