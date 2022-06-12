import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddusersComponent } from "./addusers/addusers.component";
import { DeleteComponenttsComponent } from "./deleteUser/delete-componentts/delete-componentts.component";
import { ResolverserviceService } from "./resolverservice.service";
import { UsersdetailsComponent } from "./usersdetails/usersdetails.component";

const routes: Routes = [
  {
    path:'adduser',
    component:AddusersComponent
  },
  {
    path:'deleteuser',
    component:DeleteComponenttsComponent
  },
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:UsersdetailsComponent,resolve:{user:ResolverserviceService}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
