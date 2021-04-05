import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  condition: boolean = true; //condition variable

  constructor() {}

  //This function swaps the value of condition from true to false or false to true.
  change() {
    this.condition = (this.condition)? false:true;
  }

}
