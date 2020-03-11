import { Component } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'grokonez.com';
  //description = 'Angular-Node.js Demo';

  constructor(public auth: AuthService) { }
}
