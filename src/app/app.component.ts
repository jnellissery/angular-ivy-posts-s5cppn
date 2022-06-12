import { Component, OnInit, VERSION } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { AppServiceService } from "./app-service.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements  OnInit{
users$:Observable<any>
fg:FormGroup;

  ngOnInit(): void {
   

}
constructor(){}

post(){
  
   this.fg.value;
}

 

}
