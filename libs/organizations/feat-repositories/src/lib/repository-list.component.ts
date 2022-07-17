import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PublicSourceComponent } from './public-source.component';

@Component({
  selector: 'gitropolis-orgs-repository-list',
  standalone: true,
  imports: [PublicSourceComponent],
  template: `
    <h2>Repositories</h2>
    <div class="Box">
      <ul>
        <li class="Box-row">
          <gitropolis-orgs-public-source></gitropolis-orgs-public-source>
        </li>
      </ul>
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
export class RepositoryListComponent {}
