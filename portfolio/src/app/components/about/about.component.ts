import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
  private el = inject(ElementRef);

  identityLines = [
    'I build systems.',
    'I solve problems.',
    'I care about how things work underneath.'
  ];

  capabilities = [
    { icon: '☕', title: 'Java Backend', desc: 'Spring Boot, Spring MVC, JPA, Hibernate, REST APIs' },
    { icon: '🗄️', title: 'Database Design', desc: 'MySQL schema design, query optimization, reporting' },
    { icon: '🔗', title: 'Integrations', desc: 'FCM, Twilio SMS, Knowlarity Cloud Telephony' },
    { icon: '🔺', title: 'Frontend', desc: 'Angular applications and Flutter mobile integration' },
    { icon: '🛠️', title: 'Engineering', desc: 'OOP, SOLID, design patterns, Agile SDLC' },
    { icon: '📡', title: 'Real-Time', desc: 'Push notifications, WebSocket, real-time architectures' }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    this.el.nativeElement.querySelectorAll('.reveal, .reveal-scale').forEach((el: Element) => observer.observe(el));
  }
}
