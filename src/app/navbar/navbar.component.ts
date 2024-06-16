import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  /** The username of the logged-in user. */
  public userName: string = "";

  /**
   * Constructor for NavbarComponent.
   * @param snackBar - Angular Material service for displaying snack bar messages.
   * @param router - Angular service for navigating between routes.
   */

  constructor(
    public snackBar: MatSnackBar,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.userName = JSON.parse(localStorage.getItem("user")!).userName;
  }

  
  public openMovies(): void {
    this.router.navigate(['movies']);
  }

  public openProfile(): void {
    this.router.navigate(['profile']);
  }

  
  public logoutUser(): void {
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
    this.snackBar.open('You have been logged out', 'OK', {
      duration: 2000,
    });
    this.router.navigate(['welcome']);
  }
}