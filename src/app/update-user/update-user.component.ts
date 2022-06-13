import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUsers } from '../model';
import { updateUserSuccessMsg } from '../store/users.action';
import { UsersState } from '../store/users.reducers';
import { currentuserSelector } from '../store/users.selecter';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  fg: FormGroup;
  selecteduser:IUsers;
  constructor(private fb: FormBuilder,private store:Store<UsersState>, private router: Router) {}

  ngOnInit() {
    this.fg = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
    });
    this.setvalue();
  }
  setvalue() {
    this.store.select(currentuserSelector).subscribe(x=>{
      this.selecteduser=x;
      this.fg.controls['title'].setValue(x.title)
      this.fg.controls['body'].setValue(x.body)
    })
  }
  updateuser(){

    this.store.dispatch(updateUserSuccessMsg({user:{body:this.fg.controls['body'].value,title:this.fg.controls['title'].value,id:this.selecteduser.id,userId:+this.selecteduser.id}}))

  this.router.navigate(['home'])
  }
  cancel(){
    this.router.navigate(['home'])
  }
}
