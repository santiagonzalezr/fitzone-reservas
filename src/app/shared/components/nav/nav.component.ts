import { Component, signal } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [RouterLinkWithHref, RouterLinkActive, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  toggleBtn = false;

  toggleNav(){
    this.toggleBtn = !this.toggleBtn;
  }
}
