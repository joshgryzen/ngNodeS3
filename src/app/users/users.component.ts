import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public auth: AuthService) {

    /*var request = require("request");

    var options = {
      method: 'GET',
      url: 'https://dev-yy5gb27x.auth0.com/api/v2/users',
      qs: { q: 'email_verified:true', search_engine: 'v3' },
      headers: { authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1VRTJPVGRDTjBJeU1qazVSVFF5TlRCR1JEa3hNMFJGTnpWRE5VWTRNalV5TVVRd05FUTFNQSJ9.eyJpc3MiOiJodHRwczovL2Rldi15eTVnYjI3eC5hdXRoMC5jb20vIiwic3ViIjoiSUxqNDRJMzRPTUlJRHphb29wSUluUHpUbXpFblpWNERAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGV2LXl5NWdiMjd4LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNTgzOTQ2ODY2LCJleHAiOjE1ODQwMzMyNjYsImF6cCI6IklMajQ0STM0T01JSUR6YW9vcElJblB6VG16RW5aVjREIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.QNvjQOlpfyio_8cVf0RvZ1FjcS790rMQ4OTbwZRbnIZWnZK3FqS70Aryod7tkd3DOEbKwKIM3uwuxXnMB7cGEtFaNoGPcsW7k89uX0Se3t7AaDBiADYzJgOMIFEosmMJ7LRKLE8PL6l-gt1kgYpdJNmxKOqlrGFx0Kld29TvCiBs8LFQoOXOYw2p8_EcbQSBtgN4mehaRWthbfocsZ0zWM-62tIrGlfb2-TGSz9o7kWiFvffwUnrag--zHhYzw0JO7MflyuqzWk1QwMuY9E0UICtOgcTgjFNkvUZ85hAsua-U-3BsLk-ej0ja74vi_HKlgfozOVzvoLFZ8CfVc-eqw' }
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      console.log(body);
    });*/

  }

  ngOnInit() {
  }

}
