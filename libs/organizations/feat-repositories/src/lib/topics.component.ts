import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'gitropolis-orgs-topics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="d-inline-flex flex-wrap flex-items-center my-1">
      <span
        *ngFor="let topic of topics"
        class="IssueLabel color-bg-accent color-fg mr-1"
        >{{ topic }}</span
      >
    </div>
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
export class TopicsComponent {
  topics = [
    'node.js',
    'cli',
    'build',
    'nextjs',
    'storybook',
    'build-tool',
    'build-system',
  ];
}
