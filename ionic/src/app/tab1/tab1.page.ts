import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {


  //Variable that ngFor will loop over.
  //This can be set to the result of an API call
    //eg public ExampleArray = http.get(url).toPromise();
  //Here is it just predefined.
  public ExampleArray: Array<Object> = [
    {key: "Object1", value: "Content of Object 1"},
    {key: "Object2", value: "Content of Object 2"},
    {key: "Object3", value: "Content of Object 3"},
    {key: "Object4", value: "Content of Object 4"},
  ];

  constructor() {}

  //Function to append another entry to the Array.
  append() {
    let i = this.ExampleArray.length + 1;
    this.ExampleArray.push({key: `Object${i}`, value: `Content of Object ${i}`});
  }
}
