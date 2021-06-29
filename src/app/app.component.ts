import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
