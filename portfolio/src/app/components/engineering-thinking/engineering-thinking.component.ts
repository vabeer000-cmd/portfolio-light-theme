import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-engineering-thinking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './engineering-thinking.component.html',
  styleUrl: './engineering-thinking.component.css'
})
export class EngineeringThinkingComponent implements AfterViewInit {
  private el = inject(ElementRef);

  principles = [
    {
      icon: '🏗️',
      title: 'Clean Architecture',
      desc: 'I build with separation of concerns in mind — controller, service, repository layers each have a clear responsibility. This keeps codebases maintainable and testable as they grow.'
    },
    {
      icon: '📐',
      title: 'SOLID Principles',
      desc: 'Single responsibility, open/closed, Liskov substitution, interface segregation, dependency inversion. These principles guide how I design classes and modules.'
    },
    {
      icon: '🔗',
      title: 'API Design',
      desc: 'REST APIs should be predictable — proper HTTP methods, consistent response structures, meaningful status codes, and well-documented contracts. I design APIs that frontend teams can reason about confidently.'
    },
    {
      icon: '⚡',
      title: 'Performance',
      desc: 'Think before coding: which queries will be called at scale? Where does caching make sense? I approach performance at the data layer — indexed queries, lean response payloads, and efficient data access patterns.'
    },
    {
      icon: '🛡️',
      title: 'Reliability',
      desc: 'Production systems fail in unexpected ways. I handle edge cases, write defensive code, and think about failure paths — what happens if the third-party API is down? What if data is malformed?'
    },
    {
      icon: '📈',
      title: 'Scalability',
      desc: 'Systems evolve. I try to design modules that can be extended without major rewrites — using interfaces, proper abstractions, and avoiding tight coupling between components.'
    }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    this.el.nativeElement.querySelectorAll('.reveal, .reveal-scale').forEach((el: Element) => observer.observe(el));
  }
}
