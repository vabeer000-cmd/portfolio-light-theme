import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Layer {
  id: string;
  name: string;
  desc: string;
  detail: string;
  active: boolean;
}

@Component({
  selector: 'app-behind-the-code',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behind-the-code.component.html',
  styleUrl: './behind-the-code.component.css'
})
export class BehindTheCodeComponent implements AfterViewInit {
  private el = inject(ElementRef);

  layers: Layer[] = [
    {
      id: 'request', name: 'HTTP Request', desc: 'Client sends a request',
      detail: 'A client (Angular frontend, Flutter app, or third-party) sends an HTTP request with headers, body, and authentication credentials.',
      active: false
    },
    {
      id: 'controller', name: 'Controller', desc: '@RestController',
      detail: 'Receives the HTTP request, validates input format, extracts path/query parameters, and delegates to the service layer. Does not contain business logic.',
      active: true
    },
    {
      id: 'service', name: 'Service', desc: '@Service',
      detail: 'Contains all business logic — orchestrates operations, applies rules, handles transactions, and coordinates between repositories and integrations.',
      active: false
    },
    {
      id: 'repository', name: 'Repository', desc: '@Repository / JPA',
      detail: 'Data access layer using Spring Data JPA. Handles CRUD operations, custom JPQL / native SQL queries, and database interaction.',
      active: false
    },
    {
      id: 'database', name: 'Database', desc: 'MySQL',
      detail: 'MySQL relational database storing all persistent data. Schemas are designed for business domains — bookings, drivers, companies, trips.',
      active: false
    }
  ];

  selectLayer(layer: Layer) {
    this.layers.forEach(l => l.active = false);
    layer.active = true;
  }

  get activeLayer(): Layer | undefined {
    return this.layers.find(l => l.active);
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    this.el.nativeElement.querySelectorAll('.reveal, .reveal-scale').forEach((el: Element) => observer.observe(el));
  }
}
