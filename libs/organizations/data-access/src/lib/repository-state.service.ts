import { inject, Injectable } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { map, switchMap } from 'rxjs';
import { Repositories, Repository } from './repository';
import { RepositoryApiService } from './repository-api.service';

interface RepositoryState {
  readonly organization: string;
  readonly repositories: Repositories;
}

@Injectable({
  providedIn: 'root',
})
export class RepositoryStateService extends RxState<RepositoryState> {
  #api = inject(RepositoryApiService);

  constructor() {
    super();

    this.connect(
      'repositories',
      this.select('organization').pipe(
        switchMap((organization) =>
          this.#api.byOrganization(organization).pipe(
            map((response) =>
              response.map(
                ({ description, name, topics }): Repository => ({
                  description: description ?? '',
                  name,
                  organization,
                  topics: topics ?? [],
                })
              )
            )
          )
        )
      )
    );
  }
}
