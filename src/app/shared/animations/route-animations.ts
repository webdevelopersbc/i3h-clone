import { animate, animateChild, group, query as q, style, transition, trigger } from '@angular/animations';
const query = (s, a, o = { optional: true }) => q(s, a, o);

export const routeAnimation = trigger('routeAnimations', [
  transition('login => register', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '-100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('register => login', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('200ms ease-out', style({ opacity: 0 }))]),
      query(':enter', [animate('350ms ease-out', style({ opacity: 1 }))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
