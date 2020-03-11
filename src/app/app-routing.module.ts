import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {FileUploadComponent} from './file-upload/file-upload.component';
//import {FileListComponent} from './file-list/file-list.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: "file-upload", component: FileUploadComponent},
  //{path: "file-list", component: FileListComponent},
  {path: "login", component: LoginComponent},
  {path: "profile", component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
