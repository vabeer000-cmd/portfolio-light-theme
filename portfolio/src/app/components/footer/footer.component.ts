import { Component } from '@angular/core';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

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

  scrollToTop(event: Event): void {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}