import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUsers } from '../model';
import { deleteUserSuccessMsg } from '../store/users.action';
import { UsersState } from '../store/users.reducers';
import { currentuserSelector } from '../store/users.selecter';


@Component({
  selector: 'app-delete-componentts',
  templateUrl: './delete-component.html',
  styleUrls: ['./delete-component.css']
})
export class DeleteComponent implements OnInit {
selectuser:IUsers ;
  constructor(private router:Router,private store:Store<UsersState>) {
    this.store.select(currentuserSelector).subscribe(user=>this.selectuser=user)
   }

  ngOnInit() {
    
  }
  back(){
      this.router.navigate(['home'])
  }
  update(){
    this.router.navigate(['updateuser'])
  }
  Delete(userid:string){

    this.store.dispatch(deleteUserSuccessMsg({id:userid}));
    this.router.navigate(['home'])
  }

}