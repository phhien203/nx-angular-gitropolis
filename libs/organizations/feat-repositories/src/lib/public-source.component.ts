import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'gitropolis-orgs-public-source',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>
      {{ name }}
      <span class="Label Label--secondary ml-1">Public</span>
    </h3>
    <p>{{ description }}</p>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicSourceComponent {
  name = 'nx';
  description = 'Smart, Fast and Extensible Build System';
}
