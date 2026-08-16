import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSpyService } from '../../services/scroll-spy.service';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  mobileOpen = false;
  activeSection = 'hero';

  private scrollSpy = inject(ScrollSpyService);
readonly contact = PORTFOLIO_CONFIG.contact;
readonly resume = PORTFOLIO_CONFIG.resume;
  navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  ngOnInit() {
    this.scrollSpy.activeSection$.subscribe(section => {
      this.activeSection = section;
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 60;
  }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMobile() {
    this.mobileOpen = false;
  }

  scrollTo(href: string) {
    this.closeMobile();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getSectionId(href: string): string {
    return href.replace('#', '');
  }
}
