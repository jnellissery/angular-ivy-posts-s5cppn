import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddusersComponent } from "./addusers/addusers.component";
import { DeleteComponent } from "./delete-components/delete-component";
import { ResolverserviceService } from "./resolverservice.service";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { UsersdetailsComponent } from "./usersdetails/usersdetails.component";

const routes: Routes = [
  {
    path:'adduser',
    component:AddusersComponent
  },
  {
    path:'deleteuser',
    component:DeleteComponent
  },
  {
    path:'updateuser',
    component:UpdateUserComponent
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
