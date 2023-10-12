import { Component } from '@angular/core';
import { HeaderOptions } from './govbr-components/govbr-header/header/shared/header-options.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-govbr';

  headerConfig: HeaderOptions = {
    isCompacto: true
  }
}