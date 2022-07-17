import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopicsComponent } from './topics.component';

@Component({
  selector: 'gitropolis-orgs-public-source',
  standalone: true,
  imports: [CommonModule, TopicsComponent],
  template: `
    <h3>
      {{ name }}
      <span class="Label Label--secondary ml-1">Public</span>
    </h3>
    <p>{{ description }}</p>
    <gitropolis-orgs-topics></gitropolis-orgs-topics>
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
