import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'gitropolis-orgs-repository-list',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>repository-list works!</p> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryListComponent {}
