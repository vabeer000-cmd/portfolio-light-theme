import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  readonly contact = PORTFOLIO_CONFIG.contact;
  readonly social = PORTFOLIO_CONFIG.social;

  openEmail(): void {
    window.location.href = `mailto:${this.contact.email}`;
  }

  openLinkedIn(): void {
    window.open(this.social.linkedin, '_blank', 'noopener,noreferrer');
  }

  openGitHub(): void {
    window.open(this.social.github, '_blank', 'noopener,noreferrer');
  }
}