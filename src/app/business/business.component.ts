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
  formValue: FormGroup;
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
    this.formValue = this.formBuilder.group({
      id: [''],
      title: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: ['', Validators.required],
      date: ['', [Validators.required]],
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(table, values: formCls) {
    this.submitted = true;
    // values.id ? this.updateItem(table, values) : this.createItem(table, values);
    console.log(values);
  }

  createItem(table, data) {
    if (this.formValue.valid) {
      this.service._createItemEntity(table, data).subscribe((data: any) => {
        this.formValue.reset();
      });
    }
  }

  updateItem(table, data) {
    if (this.formValue.valid) {
      this.item = data;
      this.service
        .updateItemEntity(table, this.item.id, this.item)
        .subscribe((data) => {
          this.formValue.reset();
          this.item = null;
        });
    }
  }

  get form() {
    return this.formValue.controls;
  }

  onReset() {
    this.submitted = false;
    this.formValue.reset();
  }
}
