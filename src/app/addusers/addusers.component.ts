import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppServiceService } from '../app-service.service';
import { IUsers } from '../model';
import { addUserSuccessMsg } from '../store/users.action';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {
  fg:FormGroup;
  constructor(private fb:FormBuilder, private svc:AppServiceService, private router:Router, private store: Store) {
   }

  ngOnInit() {
  this.fg=this.fb.group({
  'title': ['',[Validators.required]],
  'body':['',[Validators.required, Validators.maxLength(200)]]
  })

}
post(){  
  
this.store.dispatch(addUserSuccessMsg({user:this.fg.value}))
this.router.navigate(['home']);

setTimeout(()=>{
  this.svc.setBehavioursubject(this.fg.value);
})
}
 
navigateback(){
  this.router.navigate(['home']);
}
}