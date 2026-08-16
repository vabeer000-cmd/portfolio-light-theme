import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: string;
  name: string;
  tagline: string;
  category: string;
  featured: boolean;
  problem: string;
  approach: string;
  hardPart: string;
  result: string;
  technologies: string[];
  architecture?: ArchNode[];
}

interface ArchNode {
  label: string;
  tooltip: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {
  private el = inject(ElementRef);

  activeArchNode: ArchNode | null = null;
  hoveredProject: string | null = null;

  projects: Project[] = [
    {
      id: 'taxi',
      name: 'Taxi Management Platform',
      tagline: 'End-to-end backend for booking, operations, and analytics',
      category: 'Enterprise Backend',
      featured: true,
      problem: 'A transportation company needed a scalable backend to manage drivers, bookings, company administration, and real-time operational analytics. Multiple client apps (web + mobile) needed reliable API integration.',
      approach: 'Designed a modular Spring Boot backend with clear separation between admin, booking, driver, and reporting domains. Built dedicated API layers per business module and integrated notification and SMS services.',
      hardPart: 'Designing real-time push notification architecture using FCM so booking state changes (accepted, started, completed) instantly reach the correct app. Optimizing SQL queries for trip summary reports across high volumes of booking data.',
      result: 'Production backend powering booking management, driver tracking, company admin workflows, and operational reporting dashboards — consumed by Angular and Flutter applications.',
      technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'FCM', 'Twilio', 'REST APIs', 'Maven', 'Git'],
      architecture: [
        { label: 'Angular / Flutter App', tooltip: 'Web and mobile clients consuming backend REST APIs for booking, admin, and reporting.' },
        { label: 'Spring Boot API Layer', tooltip: 'REST endpoints handling booking management, driver management, and admin operations.' },
        { label: 'Service Layer', tooltip: 'Business logic layer handling booking state transitions, reporting, and validations.' },
        { label: 'MySQL Database', tooltip: 'Relational database for all business entities — bookings, drivers, companies, trips.' },
        { label: 'FCM Notifications', tooltip: 'Firebase Cloud Messaging used to send real-time push notifications on booking state changes.' },
        { label: 'Twilio SMS', tooltip: 'OTP-based authentication and verification for drivers and passengers.' }
      ]
    },
    {
      id: 'calling',
      name: 'Virtual Number Calling Integration',
      tagline: 'Secure driver-passenger communication via Knowlarity Cloud Telephony',
      category: 'Telephony Integration',
      featured: true,
      problem: 'Drivers and passengers needed to communicate by phone, but sharing private numbers is a serious privacy issue. A secure, virtual number-based calling mechanism was needed.',
      approach: 'Integrated Knowlarity Cloud Telephony to mask both parties behind virtual mobile numbers (VMNs). Designed backend APIs supporting call initiation workflows and participated in the high-level solution design for the telephony integration.',
      hardPart: 'Mapping virtual numbers to real sessions securely and coordinating the full call flow from initiation to teardown. Integrating with Knowlarity\'s API documentation and ensuring reliability for the driver-passenger calling workflow.',
      result: 'Secure virtual number calling feature deployed in production — drivers and passengers can call each other without exposing private numbers.',
      technologies: ['Java', 'Spring Boot', 'Knowlarity API', 'REST APIs', 'MySQL'],
      architecture: [
        { label: 'Passenger App', tooltip: 'Initiates call request to backend API.' },
        { label: 'Spring Boot Backend', tooltip: 'Handles call initiation, VMN assignment, and session management.' },
        { label: 'Knowlarity API', tooltip: 'Cloud telephony provider that masks both parties behind Virtual Mobile Numbers (VMNs).' },
        { label: 'Driver App', tooltip: 'Receives call via virtual number — real number is never exposed.' }
      ]
    },
    {
      id: 'bartering',
      name: 'Bartering Platform',
      tagline: 'Full-stack product exchange marketplace',
      category: 'Full Stack',
      featured: false,
      problem: 'A platform where users could list, browse, and exchange products without monetary transactions.',
      approach: 'Built Angular frontend screens and integrated them with Spring Boot backend APIs. Designed MySQL schema for products, users, and transaction states.',
      hardPart: 'Designing the database model for product exchange transactions and implementing consistent state transitions between offer, counter-offer, and accepted states.',
      result: 'Functional full-stack marketplace with product management, user accounts, and transaction management.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'REST APIs', 'JPA']
    },
    {
      id: 'learning',
      name: 'Learning Application',
      tagline: 'Course and content management interface',
      category: 'Full Stack',
      featured: false,
      problem: 'An internal learning platform needed responsive UI screens for course management and content delivery.',
      approach: 'Developed Angular UI screens for course browsing, content display, and user progress tracking. Integrated with backend REST APIs.',
      hardPart: 'Designing reusable Angular components for dynamic course content and ensuring clean API integration for real-time progress updates.',
      result: 'Responsive course and content management screens integrated with backend services.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'REST APIs']
    }
  ];

  showArchNode(node: ArchNode) { this.activeArchNode = node; }
  hideArchNode() { this.activeArchNode = null; }

  ngAfterViewInit() {
    if (window.matchMedia('(pointer: fine)').matches) {
      const cards = this.el.nativeElement.querySelectorAll('.project-card');
      cards.forEach((card: HTMLElement) => {
        card.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `perspective(1000px) rotateX(${y * -4}deg) rotateY(${x * 4}deg) translateZ(4px)`;
        });
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      });
    }

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    this.el.nativeElement.querySelectorAll('.reveal, .reveal-scale').forEach((el: Element) => observer.observe(el));
  }
}
