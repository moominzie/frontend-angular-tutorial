import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  baverageList = [
    { no: 10001, name: 'Cocoa freppuchino' },
    { no: 10002, name: 'Mocha freppuchino' },
    { no: 10003, name: 'Green tea freppuchino' }
  ]

  constructor() {
    this.baverageList = this.baverageList.sort((oldVal, newVal) => {
      return newVal.no + oldVal.no
    })

    this.baverageList = this.baverageList.sort((oldVal, newVal) => {
      if (newVal.name > oldVal.name) {
        return -1;
      } else if (newVal.name < oldVal.name) {
        return 1;
      } else {
        return 0;
      }
    })
  }
   

  ngOnInit(): void {
    }

    show = false;
    confirmShow = false;

    showObject:any = {
      confirmShow: true
    };

}
