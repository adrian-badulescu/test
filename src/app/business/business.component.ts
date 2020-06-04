import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Service } from '../service.service';
import { formCls } from './formModel';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
})
export class BusinessComponent implements OnInit {
  form: FormGroup;
  item: formCls;
  list: Array<formCls>;
  Active: Array<string> = ['Da', 'Nu'];
  submitted: boolean;
  id: number;
  private subscription: any;
  table: string;
  constructor(
    private service: Service,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.id = parseInt(params['id']);
    });
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      date: ['', [Validators.required]],
      active: ['', [Validators.required]],
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(table, values: formCls) {
    // values.id ? this.updateItem(table, values) : this.createItem(table, values);
    console.log(values);
  }

  createItem(table, data) {
    if (this.form.valid) {
      this.service._createItemEntity(table, data).subscribe((data: any) => {
        this.form.reset();
      });
    }
  }

  updateItem(table, data) {
    if (this.form.valid) {
      this.item = data;
      this.service
        .updateItemEntity(table, this.item.id, this.item)
        .subscribe((data) => {
          this.form.reset();
          this.item = null;
        });
    }
  }
}
