import { Component } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-console',
  templateUrl: 'console.page.html',
  styleUrls: ['console.page.scss']
})
export class ConsolePage {

  public information: Array<String> = [
    "Pizza",
    "Sushi",
    "Burgers"
  ];

  public counter: number = 0;

  constructor() {}

  //requireed for ion-reorder
  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    console.log('Reordered item from', ev.detail.from, 'to', ev.detail.to);

    ev.detail.complete();
  }

  buttonFunction() {
    console.log("Button was Pushed!")
    this.counter++;
  }

}
