import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Store } from '@ngrx/store/src';
import { UsersState } from '../store/users.reducers';
import { currentuserSelector } from '../store/users.selecter';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  fg:FormGroup;
  constructor(private fb:FormBuilder,private store:Store<UsersState>) { 
  }

  ngOnInit() {
    this.fg= this.fb.group({
      'title':['',[Validators.required]],
      'body':['',[Validators.required]]
    })
   this.setvalue()
  }
  setvalue(){
    this.store.select(currentuserSelector).subscribe(x=>{
      this.fg.controls['title'].setValue(x.title)
      this.fg.controls['body'].setValue(x.body)
    })
  }


}