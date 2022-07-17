import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'gitropolis-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container-lg p-responsive">
      <h1>Gitropolis</h1>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent {
  title = 'gitropolis-app';
}
