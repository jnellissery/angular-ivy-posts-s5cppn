import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { State } from '@ngrx/store/src';
import { UsersState } from '../../store/users.reducers';

@Component({
  selector: 'app-delete-componentts',
  templateUrl: './delete-componentts.component.html',
  styleUrls: ['./delete-componentts.component.css']
})
export class DeleteComponenttsComponent implements OnInit {

  constructor(private router:Router,private state:State<UsersState>) { }

  ngOnInit() {
  }
  back(){
      this.router.navigate(['home'])
  }

}