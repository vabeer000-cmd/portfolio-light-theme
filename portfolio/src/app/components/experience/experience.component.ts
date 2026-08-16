import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
  challenges: string[];
  expanded: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements AfterViewInit {
  private el = inject(ElementRef);

  experiences: ExperienceItem[] = [
    {
      title: 'Java Full Stack Developer',
      company: 'Alladi Cloud Solutions',
      location: 'Hyderabad, India',
      period: 'Jan 2024 – Present',
      duration: '2.5+ Years',
      type: 'Full-time',
      expanded: true,
      responsibilities: [
        'Developed RESTful APIs using Spring Boot, Spring MVC, Spring Data JPA, and Hibernate for web and mobile applications',
        'Designed and implemented backend modules for company administration, booking management, driver management, and operational workflows',
        'Built reporting APIs and business dashboards supporting operational analytics and trip summaries',
        'Integrated Firebase Cloud Messaging (FCM) for real-time push notifications',
        'Integrated Twilio SMS API for OTP-based authentication and verification',
        'Designed and optimized MySQL queries for business modules and reports',
        'Collaborated with Angular and Flutter teams to integrate backend APIs end-to-end',
        'Participated in debugging, production support, requirement analysis, testing, and Agile sprint activities'
      ],
      technologies: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'MySQL', 'FCM', 'Twilio', 'Knowlarity', 'Maven', 'Git', 'Postman', 'Angular', 'Flutter'],
      challenges: [
        'Integrating Knowlarity Cloud Telephony for virtual number calling between drivers and passengers',
        'Designing real-time notification architecture using FCM for booking state management',
        'Building optimized reporting queries for operational analytics dashboards'
      ]
    }
  ];

  education = {
    degree: 'Bachelor of Technology — Electronics & Communication Engineering',
    institution: 'University College of Engineering & Technology (UCET)',
    university: 'Acharya Nagarjuna University',
    period: '2019 – 2023',
    grade: 'CGPA: 8.0 / 10'
  };

  toggleExpand(exp: ExperienceItem) {
    exp.expanded = !exp.expanded;
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    this.el.nativeElement.querySelectorAll('.reveal, .reveal-scale').forEach((el: Element) => observer.observe(el));
  }
}
