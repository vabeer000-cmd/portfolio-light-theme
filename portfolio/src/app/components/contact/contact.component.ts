import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  private readonly email = 'vabeer000@gmail.com';

  // Replace these when you have your actual profiles
  private readonly linkedinUrl = 'https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bo6%2BNX3ClRy2PChGjY7cJ7w%3D%3D';
  private readonly githubUrl = 'https://github.com/vabeer000-cmd/jewellerywebsite';

  openEmail(): void {
    window.location.href = `mailto:${this.email}`;
  }

  openLinkedIn(): void {
    if (!this.linkedinUrl) {
      console.warn('LinkedIn URL is not configured.');
      return;
    }

    window.open(this.linkedinUrl, '_blank', 'noopener,noreferrer');
  }

  openGitHub(): void {
    if (!this.githubUrl) {
      console.warn('GitHub URL is not configured.');
      return;
    }

    window.open(this.githubUrl, '_blank', 'noopener,noreferrer');
  }
}