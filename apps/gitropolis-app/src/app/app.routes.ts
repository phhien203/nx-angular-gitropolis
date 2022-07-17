import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'orgs/:organization/repositories',
    loadComponent: () =>
      import('@gitropolis/organizations/feat-repositories').then(
        (m) => m.OrganizationsFeatRepositoriesComponent
      ),
  },
];
