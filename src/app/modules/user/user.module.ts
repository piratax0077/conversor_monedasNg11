import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';
import { DefaultUserComponent } from './default-user/default-user.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    DefaultUserComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
