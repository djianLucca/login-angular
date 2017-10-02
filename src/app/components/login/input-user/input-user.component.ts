import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.css']
})
export class InputUserComponent implements OnInit {
  icone: string = "email";

  constructor() {
   }

  ngOnInit() {
  }
  
  trocaIcone(){
    if(this.icone == "email"){
      this.icone = "drafts";
    }
    else{
      this.icone = "email";
    }
  }

}
