import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GovBrComponentsEnum } from '../../shared/govbr-components.enum';
import { GovbrService } from '../../shared/govbr.service';
import { HeaderOptions } from './shared/header-options.model';

@Component({
  selector: 'br-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  @Input()
  options!: HeaderOptions;

  @ViewChild('BRHeader')
  template!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    new GovbrService().initialize(GovBrComponentsEnum.BRHeader, this.template?.nativeElement);
  }

}
