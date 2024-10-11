import { trigger, transition, style, animate } from '@angular/animations';

export const slideInFromBottomAnimation = trigger('slideInFromBottomAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1000ms ease-out', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('500ms ease-in', style({ opacity: 0 }))
  ])
]);