import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  category: string;
  icon: string;
  skills: { name: string; tooltip: string }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit {
  private el = inject(ElementRef);

  activeTooltip: string | null = null;
  tooltipText = '';

  skillGroups: SkillGroup[] = [
    {
      category: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Java', tooltip: 'Primary language. OOP, Collections, Streams, Lambda, Java 8+ features.' },
        { name: 'Spring Boot', tooltip: 'Used for building production REST APIs and service-layer architecture.' },
        { name: 'Spring MVC', tooltip: 'MVC pattern for handling web requests and building RESTful endpoints.' },
        { name: 'Spring Data JPA', tooltip: 'Data access layer with JPA repositories and JPQL queries.' },
        { name: 'Hibernate', tooltip: 'ORM framework for database mapping and session management.' },
        { name: 'REST APIs', tooltip: 'Designing and consuming RESTful APIs following HTTP standards.' }
      ]
    },
    {
      category: 'Core Java',
      icon: '☕',
      skills: [
        { name: 'OOP', tooltip: 'Object-oriented design with encapsulation, inheritance, and polymorphism.' },
        { name: 'Collections', tooltip: 'Java Collections Framework — List, Map, Set, Queue usage.' },
        { name: 'Java 8+', tooltip: 'Streams, Lambda expressions, Functional Interfaces, Optional API.' },
        { name: 'Exception Handling', tooltip: 'Structured error handling with custom exceptions and global handlers.' },
        { name: 'Concurrency', tooltip: 'Threads, synchronization, and concurrent programming fundamentals.' }
      ]
    },
    {
      category: 'Database',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', tooltip: 'Schema design, query optimization, reporting, and analytics queries.' },
        { name: 'SQL', tooltip: 'Complex queries, joins, aggregations for business module reporting.' }
      ]
    },
    {
      category: 'Integrations',
      icon: '🔌',
      skills: [
        { name: 'Firebase FCM', tooltip: 'Used for real-time push notifications and booking state updates.' },
        { name: 'Twilio SMS', tooltip: 'OTP-based authentication and SMS verification flow.' },
        { name: 'Knowlarity', tooltip: 'Cloud telephony integration for virtual number calling between users.' }
      ]
    },
    {
      category: 'Frontend / Mobile',
      icon: '🖥️',
      skills: [
        { name: 'Angular', tooltip: 'Built responsive screens and integrated them with REST backend APIs.' },
        { name: 'Flutter', tooltip: 'Collaborated on Flutter mobile app integration with backend APIs.' },
        { name: 'HTML5 / CSS3', tooltip: 'Semantic markup and styling for Angular web applications.' },
        { name: 'Bootstrap', tooltip: 'Responsive UI framework used in web application layouts.' }
      ]
    },
    {
      category: 'Tools & Methods',
      icon: '🛠️',
      skills: [
        { name: 'Git', tooltip: 'Version control, branching strategies, and code collaboration.' },
        { name: 'Maven', tooltip: 'Build automation and dependency management for Java projects.' },
        { name: 'Postman', tooltip: 'API testing, collection management, and endpoint validation.' },
        { name: 'Swagger', tooltip: 'API documentation and interactive endpoint exploration.' },
        { name: 'Agile / Scrum', tooltip: 'Sprint planning, daily standups, backlog grooming, retrospectives.' }
      ]
    }
  ];

  showTooltip(skillName: string, tooltip: string) {
    this.activeTooltip = skillName;
    this.tooltipText = tooltip;
  }

  hideTooltip() {
    this.activeTooltip = null;
    this.tooltipText = '';
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    this.el.nativeElement.querySelectorAll('.reveal, .reveal-scale').forEach((el: Element) => observer.observe(el));
  }
}
