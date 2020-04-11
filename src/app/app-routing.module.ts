import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {FileUploadComponent} from './file-upload/file-upload.component';
//import {FileListComponent} from './file-list/file-list.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: "file-upload", component: FileUploadComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "profile", component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
