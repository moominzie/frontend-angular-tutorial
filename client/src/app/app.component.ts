import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'client';

  testContent = "";

  content:string = "";

  contentText:string = "Methawee Atthawan";

  contentTest: any;

  receiveEvent(event: number) {
    console.log("event", event)
  }

  recieveText(event:string){
    this.contentTest = event;
  }

  recieveContentTest($event:any){
    this.contentTest=$event;
  }

  
}
