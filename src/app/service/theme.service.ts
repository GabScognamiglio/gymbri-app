import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>('dark');
  currentTheme$ = this.themeSubject.asObservable(); 
  setTheme(theme: string) {
    this.themeSubject.next(theme);
  }
}
