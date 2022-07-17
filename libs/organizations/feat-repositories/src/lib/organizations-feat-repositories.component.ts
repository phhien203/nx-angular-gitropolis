import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RepositoryListComponent } from './repository-list.component';

@Component({
  selector: 'gitropolis-orgs-repositories',
  standalone: true,
  imports: [RepositoryListComponent],
  template: `
    <div class="container-lg p-responsive">
      <gitropolis-orgs-repository-list></gitropolis-orgs-repository-list>
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
export class OrganizationsFeatRepositoriesComponent {}
