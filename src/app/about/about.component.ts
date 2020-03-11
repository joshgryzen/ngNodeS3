import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
//import { AuthService } from 'nestjs-upload-file/src/auth/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
