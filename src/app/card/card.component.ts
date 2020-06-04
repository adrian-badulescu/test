import { Component, OnInit, Input } from '@angular/core';
import { IData } from './Idata';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() data: IData;

  constructor(private route: ActivatedRoute,
    private router: Router) {
      this.route.params.subscribe( params => console.log(params) );
    }

  ngOnInit(): void {
    console.log(this.data.image);
  }

  goToBusiness(id) {
    this.router.navigate(['/business', id])
  }
}
