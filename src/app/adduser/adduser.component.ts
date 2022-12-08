import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor( ) { }

  id=""
  firstname=""
  lastName=""
  maidenName=""
  age=""
  gender=""
  email=""
  phone=""
  username=""
  password=""
  birthDate=""

  ngOnInit(): void {
  }
  read=()=>{
    let data={
      "id":"this.id",
      "firstname":"this.firstname",
      "lastName":"this.lastName",
      "maidenName":"this.maidenName",

      "age":"this.age",

      "gender":"this.gender",

      "email":"this.email",

      "phone":"this.phone",
      "username":"this.username",
      "password":"this.password",
      "birthDate":"this.birthDate",






    }
    console.log(data)
  }
}
