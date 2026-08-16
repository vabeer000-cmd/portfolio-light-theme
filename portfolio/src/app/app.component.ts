import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EngineeringThinkingComponent } from './components/engineering-thinking/engineering-thinking.component';
import { BehindTheCodeComponent } from './components/behind-the-code/behind-the-code.component';
import { BeyondFrameworkComponent } from './components/beyond-framework/beyond-framework.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumeCTAComponent } from './components/resume-cta/resume-cta.component';
import {
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    EngineeringThinkingComponent,
    BehindTheCodeComponent,
    BeyondFrameworkComponent,
    ResumeCTAComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';


  private revealObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            this.revealObserver?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    document
      .querySelectorAll('.reveal')
      .forEach((element) => {
        this.revealObserver?.observe(element);
      });
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
  }
}
