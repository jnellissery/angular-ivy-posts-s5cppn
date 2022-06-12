import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppServiceService } from '../app-service.service';
import { IUsers } from '../model';
import { getUsersSuccessMsg,selecteUserSuccessMsg } from '../store/users.action';
import { UsersState } from '../store/users.reducers';
import { selectUsers, usersSelector } from '../store/users.selecter';

@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./usersdetails.component.css']
})
export class UsersdetailsComponent implements OnInit {
  users$:Observable<IUsers[]>
  fg:FormGroup;
  usersarray:IUsers[]=[];


  constructor( private router : Router, private svc:AppServiceService, private store$: Store<UsersState>) {
    this.store$.select(usersSelector).subscribe(user=>this.users$=of(user))


   }

ngOnInit() {
 
 if(!this.svc.userList ){ 
setTimeout(()=>{
  this.svc.getUserinfo().subscribe(x=>{this.svc.userList=x;
    //console.log(this.svc.userList)
    this.store$.dispatch(getUsersSuccessMsg({ users:x}))}
    )},500);
}
}
adduser(){
  this.router.navigate(['adduser'])
  }
  selectuser(userid){
    this.store$.dispatch(selecteUserSuccessMsg({id:userid}));
    this.router.navigate(['deleteuser'])
  }
}