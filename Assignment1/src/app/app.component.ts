import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showAssignment1 = false;
  showAssignment2 = false;
  public showOne:boolean = false;
  public buttonName:any = 'Show';

  ngOnInit(): void {
  }

   toggle() {
    this.showOne = !this.showOne;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showOne)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  toggleDisplay() {
    this.showAssignment1 = !this.showAssignment1;
  }


  toggleDisplay2() {
    this.showAssignment2 = !(this.showAssignment2);
  }
}
