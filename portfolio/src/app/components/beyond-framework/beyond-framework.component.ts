import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beyond-framework',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beyond-framework.component.html',
  styleUrl: './beyond-framework.component.css'
})
export class BeyondFrameworkComponent implements AfterViewInit {
  private el = inject(ElementRef);

  chainSteps = [
    { icon: '☕', label: 'Java Language', highlight: false },
    { icon: '🧱', label: 'OOP & Design Principles', highlight: false },
    { icon: '📦', label: 'Collections & Generics', highlight: false },
    { icon: '🌊', label: 'Streams & Functional Java', highlight: false },
    { icon: '🔀', label: 'Concurrency & Threading', highlight: false },
    { icon: '🎨', label: 'Design Patterns', highlight: false },
    { icon: '🌱', label: 'Spring Framework', highlight: true },
    { icon: '🔗', label: 'REST APIs & HTTP', highlight: true },
    { icon: '🗄️', label: 'Databases & SQL', highlight: false },
    { icon: '📡', label: 'Integrations & Messaging', highlight: false }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    this.el.nativeElement.querySelectorAll('.reveal, .reveal-scale').forEach((el: Element) => observer.observe(el));
  }
}
