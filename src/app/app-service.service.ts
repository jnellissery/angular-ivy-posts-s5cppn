import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUsers } from './model';
 

@Injectable({providedIn:'root'})
export class AppServiceService {
databehaviourSubject$ = new BehaviorSubject<IUsers[]>([{id:"1",userId:1,title:"koko",body:""}]);
dataobservable$:Observable<IUsers[]>= this.databehaviourSubject$.asObservable();
public userList: IUsers[];
  constructor(private http:HttpClient) {
}
getUserinfo():Observable<IUsers[]>{
return this.http.get<IUsers[]>('https://jsonplaceholder.typicode.com/posts') 
}
setBehavioursubject(user){
   this.databehaviourSubject$.next([ user,...this.databehaviourSubject$.value]);
}
setinitialstateBehaviour(){
  this.databehaviourSubject$.next(this.userList);
}
getbehaviourdata():Observable<IUsers[]>{ 
 return    this.databehaviourSubject$.asObservable()
}
}
 
 

