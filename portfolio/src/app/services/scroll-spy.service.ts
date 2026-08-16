import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
    private activeSectionSubject = new BehaviorSubject<string>('hero');
    activeSection$ = this.activeSectionSubject.asObservable();

    private observers: IntersectionObserver[] = [];

    init(sectionIds: string[]) {
        this.observers.forEach(o => o.disconnect());
        this.observers = [];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                        this.activeSectionSubject.next(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
        );

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        this.observers.push(observer);
    }

    destroy() {
        this.observers.forEach(o => o.disconnect());
        this.observers = [];
    }
}
