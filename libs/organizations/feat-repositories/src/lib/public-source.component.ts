import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Repository } from '@gitropolis/organizations/data-access';
import { TopicsComponent } from './topics.component';

@Component({
  selector: 'gitropolis-orgs-public-source',
  standalone: true,
  imports: [CommonModule, TopicsComponent],
  template: `
    <h3>
      {{ repository?.name }}
      <span class="Label Label--secondary ml-1">Public</span>
    </h3>
    <p *ngIf="hasDescription">{{ repository?.description }}</p>
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

  @Input()
  repository: Repository | null = null;

  get hasDescription(): boolean {
    return (this.repository?.description ?? '') !== '';
  }
}
