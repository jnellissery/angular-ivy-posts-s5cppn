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
import { DeleteComponenttsComponent } from './deleteUser/delete-componentts/delete-componentts.component';
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
  declarations: [AppComponent, AddusersComponent, UsersdetailsComponent,DeleteComponenttsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
