import { Component, signal } from '@angular/core';
import { EditorsComponent } from './editors/editors';

@Component({
  selector: 'app-root',
  imports: [EditorsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('codepen-clone');
}
