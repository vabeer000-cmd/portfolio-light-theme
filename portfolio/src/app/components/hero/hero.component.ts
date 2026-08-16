import { Component, OnInit, ElementRef, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
// export class HeroComponent implements AfterViewInit {
//   private el = inject(ElementRef);

//   pipelineSteps = [
//     { label: 'Java', icon: '☕', desc: 'Core Language' },
//     { label: 'Spring Boot', icon: '🌱', desc: 'Backend Framework' },
//     { label: 'REST APIs', icon: '🔗', desc: 'Service Layer' },
//     { label: 'MySQL', icon: '🗄️', desc: 'Data Layer' },
//     { label: 'FCM / Twilio', icon: '📡', desc: 'Integrations' },
//     { label: 'Angular', icon: '🔺', desc: 'Frontend' }
//   ];

//   ngAfterViewInit() {
//     // Magnetic button effect on CTA buttons (desktop only)
//     if (window.matchMedia('(pointer: fine)').matches) {
//       const btns = this.el.nativeElement.querySelectorAll('.magnetic');
//       btns.forEach((btn: HTMLElement) => {
//         btn.addEventListener('mousemove', (e: MouseEvent) => {
//           const rect = btn.getBoundingClientRect();
//           const x = e.clientX - rect.left - rect.width / 2;
//           const y = e.clientY - rect.top - rect.height / 2;
//           btn.style.transform = `translate(${x * 0.15}px, ${y * 0.2}px)`;
//         });
//         btn.addEventListener('mouseleave', () => {
//           btn.style.transform = '';
//         });
//       });
//     }
//   }
// }
export class HeroComponent implements AfterViewInit {
[x: string]: any;
  private el = inject(ElementRef);

  readonly contact = PORTFOLIO_CONFIG.contact;
  readonly social = PORTFOLIO_CONFIG.social;

  pipelineSteps = [
    { label: 'Java', icon: '☕', desc: 'Core Language' },
    { label: 'Spring Boot', icon: '🌱', desc: 'Backend Framework' },
    { label: 'REST APIs', icon: '🔗', desc: 'Service Layer' },
    { label: 'MySQL', icon: '🗄️', desc: 'Data Layer' },
    { label: 'FCM / Twilio', icon: '📡', desc: 'Integrations' },
    { label: 'Angular', icon: '🔺', desc: 'Frontend' }
  ];

  scrollToProjects(event: Event): void {
    event.preventDefault();

    document.querySelector('#projects')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

    openLinkedIn(): void {
    window.open(this.social.linkedin, '_blank', 'noopener,noreferrer');
    
  }

  ngAfterViewInit() {
    // Magnetic button effect on CTA buttons (desktop only)
    if (window.matchMedia('(pointer: fine)').matches) {
      const btns = this.el.nativeElement.querySelectorAll('.magnetic');

      btns.forEach((btn: HTMLElement) => {
        btn.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          btn.style.transform =
            `translate(${x * 0.15}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseleave', () => {
          btn.style.transform = '';
        });
      });
    }
  }
}