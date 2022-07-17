import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gitropolis-orgs-repositories',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>organizations-feat-repositories works!</p> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationsFeatRepositoriesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
