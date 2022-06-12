import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppServiceService } from './app-service.service';
import { IUsers } from './model';

@Injectable({providedIn:'root'})
export class ResolverserviceService implements Resolve<IUsers[]>{
resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):  Observable<IUsers[]> {
  return this.svc.getUserinfo(); 
}
constructor(private svc:AppServiceService){
  
}

 

}