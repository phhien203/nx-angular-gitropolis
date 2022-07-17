import { InjectionToken } from '@angular/core';
import { Octokit } from '@octokit/rest';

export const octokitToken = new InjectionToken<Octokit>('octokitToken', {
  providedIn: 'root',
  factory: () => new Octokit(),
});
