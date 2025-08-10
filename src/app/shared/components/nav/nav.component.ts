import { Component, inject, signal } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLinkWithHref, RouterLinkActive, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  private authService = inject(AuthService);
  toggleBtn = false;

  toggleNav(){
    this.toggleBtn = !this.toggleBtn;
  }

  logout(){
    this.authService.logout();
  }
}
