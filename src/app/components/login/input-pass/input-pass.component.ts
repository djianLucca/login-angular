import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-pass',
  templateUrl: './input-pass.component.html',
  styleUrls: ['./input-pass.component.css']
})
export class InputPassComponent implements OnInit {
  icone: string = "lock";

  constructor() {
   }

  ngOnInit() {
  }

  trocaIcone(){
    if(this.icone == "lock"){
      this.icone = "lock-open";
    }
    else{
      this.icone = "lock";
    }
  }

}
