import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryStateService } from '@gitropolis/organizations/data-access';
import { filter, map, Observable } from 'rxjs';
import { PublicSourceComponent } from './public-source.component';

@Component({
  selector: 'gitropolis-orgs-repository-list',
  standalone: true,
  imports: [CommonModule, PublicSourceComponent],
  template: `
    <h2>Repositories</h2>
    <div class="Box">
      <ul>
        <li *ngFor="let repository of repositories$ | async" class="Box-row">
          <gitropolis-orgs-public-source
            [repository]="repository"
          ></gitropolis-orgs-public-source>
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
export class RepositoryListComponent {
  #route = inject(ActivatedRoute);
  #store = inject(RepositoryStateService);
  #organizationRouteParam$ = this.#route.paramMap.pipe(
    map((params) => params.get('organization')),
    filter((organization) => organization !== null)
  ) as Observable<string>;

  repositories$ = this.#store.select('repositories');

  constructor() {
    this.#store.connect('organization', this.#organizationRouteParam$);
  }
}
