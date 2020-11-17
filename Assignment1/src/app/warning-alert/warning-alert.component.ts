import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlert implements OnInit {

  allowNewAlert = false;
  alertCreationStatus = "";
  alertName = 'W A R N I N G !';

  constructor() { 
    setTimeout(() => {
      this.allowNewAlert = true;
    } , 2000);
  }

  ngOnInit(): void {
  }

  onCreateAlert(){
    //this.alertCreationStatus = !(this.alertCreationStatus);
    this.alertCreationStatus = "New alert " + this.alertName + " was created!";
  }

  onUpdateAlertName(event: any) {
    //console.log(event);
    this.alertName = (<HTMLInputElement>event.target).value;
  }

}
