import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { Service } from './service.service';
import { IData } from './card/Idata';
import { data } from './mockedData/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: Array<IData> = data;
  defaultView: boolean;

  constructor(private service: Service) {
    this.defaultView = this.service.defaultView;
  }

  ngOnInit() {}
  title = 'app-test';

  setDefaultView(): boolean {
    return (this.defaultView = this.service.defaultView);
  }

  trackById(index, business) {
    return business.id;
  }
}
