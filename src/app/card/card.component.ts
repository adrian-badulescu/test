import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IData } from './Idata';
import { Service } from '../service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() data: IData;

  constructor(private router: Router, private service: Service) {}

  ngOnInit(): void {
    // console.log(this.data.image);
  }

  goToBusiness(id) {
    this.service.defaultView = false;
    this.router.navigate(['/business', id]);   
  }
}
