import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlert implements OnInit {
  userName = "Insert Name Here"

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
