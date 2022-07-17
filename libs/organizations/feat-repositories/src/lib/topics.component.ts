import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { arrayEquals } from './array-equals';

@Component({
  selector: 'gitropolis-orgs-topics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="hasTopics"
      class="d-inline-flex flex-wrap flex-items-center my-1"
    >
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
  #topics: readonly string[] = [];

  @Input()
  set topics(topics: readonly string[]) {
    topics = topics.slice(0, 7);

    if (arrayEquals(topics, this.#topics)) {
      return;
    }

    this.#topics = topics;
  }

  get topics(): readonly string[] {
    return this.#topics;
  }

  get hasTopics(): boolean {
    return this.topics.length > 0;
  }
}
