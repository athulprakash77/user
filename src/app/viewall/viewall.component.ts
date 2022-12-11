import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  constructor(private api:ApiService) {this.dataFromApi() }

  dataFromApi=()=>{
    this.api.fetchuser().subscribe(
      (Response:any)=>{
        this.users=Response.users
      }
    )
  }


  users:any=[]

  

  ngOnInit(): void {
  }

}
