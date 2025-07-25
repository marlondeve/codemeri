import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

@Component({
  selector: 'app-editors',
  standalone: true,
  imports: [FormsModule, MonacoEditorModule],
  templateUrl: './editors.html',
  styleUrl: './editors.scss'
})
export class EditorsComponent {
  htmlCode = '<h1>¡Hola CodePen Clone!</h1>';
  cssCode = 'h1 { color: #e91e63; text-align: center; }';
  jsCode = 'console.log("Hello from JS!")';

  htmlOptions = { theme: 'vs-dark', language: 'html', automaticLayout: true };
  cssOptions = { theme: 'vs-dark', language: 'css', automaticLayout: true };
  jsOptions = { theme: 'vs-dark', language: 'javascript', automaticLayout: true };

  previewSrcDoc = '';
  private debounceTimer: any;

  constructor() {
    this.updatePreview();
  }

  updatePreview() {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.previewSrcDoc = `
        <html>
          <head>
            <style>${this.cssCode}</style>
          </head>
          <body>
            ${this.htmlCode}
            <script>${this.jsCode}<\/script>
          </body>
        </html>
      `;
    }, 300);
  }
}
