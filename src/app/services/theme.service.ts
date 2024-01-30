import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() {
    const theme = this.getStoredTheme() || this.getSystemPrefersColor();
    this.setTheme(theme);
  }

  getSystemPrefersColor(): 'dark' | 'light' {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  getStoredTheme(): 'dark' | 'light' | 'auto' {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme as 'dark' | 'light' | 'auto' : 'auto';
  }

  storeTheme(theme: 'dark' | 'light' | 'auto') {
    if (theme === 'auto') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', theme);
    }
  }

  setTheme(theme: 'dark' | 'light' | 'auto') {
    this.storeTheme(theme);
    if (theme === 'auto') {
      theme = this.getSystemPrefersColor();
    }
    document.body.classList.toggle('dark', theme === 'dark');
  }

  toggleTheme() {
    const nextTheme = {
      'dark': 'light',
      'light': 'dark',
      'auto': this.getSystemPrefersColor()
    };
    let current = this.getStoredTheme();
    current = current ? current : 'light';
    this.setTheme(nextTheme[current] as 'dark' | 'light' | 'auto');
  }
}