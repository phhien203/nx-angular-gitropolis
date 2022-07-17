import { inject, Injectable } from '@angular/core';
import { abortable } from './abortable.operator';
import { octokitToken } from './octokit.token';

@Injectable({
  providedIn: 'root',
})
export class RepositoryApiService {
  #octokit = inject(octokitToken);

  byOrganization(organization: string) {
    return abortable((signal) =>
      this.#octokit.rest.repos
        .listForOrg({
          org: organization,
          sort: 'updated',
          request: {
            signal,
          },
        })
        .then((response) => response.data)
    );
  }
}
