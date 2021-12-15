import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interface/UserInterface';

export interface CompanyInterface {
  name: string;
  email: string;
  address: string;
  tel: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  company: CompanyInterface = {
    name: "ARSoft",
    email: "arsoft@ar.co.th",
    address: "14 charoen nakorn",
    tel: "022220000",
  }

  user: UserInterface = {
    name: "",
    email: "",
    password: "",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
