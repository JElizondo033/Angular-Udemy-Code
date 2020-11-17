import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'twoWay',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {
  userName = '';
  allowReset = false;

  constructor() { 
    while(this.userName != ''){
      setTimeout(() => {
        this.allowReset = true;
      } ,1);
    }
    
  }

  ngOnInit(): void {
  }

  resetUserName(){
    if(this.userName != ''){
      this.userName = '';
    }
  }

}
