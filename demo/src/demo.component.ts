import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './demo.component.html',
})
export class DemoComponent {

  public year = new Date().getFullYear();
}
