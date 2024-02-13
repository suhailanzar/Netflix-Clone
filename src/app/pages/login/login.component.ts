
declare var google: any;
import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // This code will only execute in the browser environment
      google.accounts.id.initialize({
        client_id: '46258121982-bf0nmavbrpuhvaq89b6jkp4mf5pidubm.apps.googleusercontent.com',
        callback: (resp: any) => this.handleLogin(resp)
      });

      google.accounts.id.renderButton(document.getElementById("google-btn"), {
        theme: 'filled_blue',
        size: 'large',
        shape: 'rectangle',
        width: 350
      });
    }
  }

  private handleLogin(response: any) {
    if (response) {
      // Decode the token
      const payLoad = this.decodeToken(response.credential);
      // Store in session
      sessionStorage.setItem("logged", JSON.stringify(payLoad));
      // Navigate to home/browse
      this.router.navigate(['homepage']);
    }
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split(".")[1]));
  }
}