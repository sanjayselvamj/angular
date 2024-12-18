import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule, CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'myapp';
  isLoginOrRegisterOrHelpPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Define an array of paths to check against
    const protectedRoutes = ['/login', '/help', '/new-ac'];

    // Listen to router events and update isLoginOrRegisterOrHelpPage accordingly
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        // Check if the current route matches any of the protected routes
        this.isLoginOrRegisterOrHelpPage = protectedRoutes.some(route => currentRoute.includes(route));
      }
    });
  }
}
