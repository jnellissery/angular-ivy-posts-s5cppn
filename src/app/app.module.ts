import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddusersComponent } from './addusers/addusers.component';

import { UsersdetailsComponent } from './usersdetails/usersdetails.component';
import { RouterModule } from '@angular/router';
import { StoreModule} from '@ngrx/store'
import { usersReducer } from './store/users.reducers';
import { DeleteComponent } from './delete-components/delete-component';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forRoot(
      { users: usersReducer },
      {}
    ),
  ],
  declarations: [AppComponent, AddusersComponent, UsersdetailsComponent,DeleteComponent,UpdateUserComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
