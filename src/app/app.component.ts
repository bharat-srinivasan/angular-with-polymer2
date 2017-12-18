import { Component } from "@angular/core";
import { Employee } from "./Employee";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";
  emp: Employee = new Employee();
  items = [
    {
      key: "F",
      val: "Full Time"
    }, {
      key: "C",
      val: "Contract"
    }
  ];

  constructor() {

  }

  // typeChosen(value) {
  //   console.log(value);
  // }

  onSubmit() {
    console.log("Submitted!!!");
    console.log(this.emp);
  }
}
