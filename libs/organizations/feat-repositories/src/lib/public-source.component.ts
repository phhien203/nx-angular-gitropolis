import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gitropolis-orgs-public-source',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>public-source works!</p> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicSourceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
