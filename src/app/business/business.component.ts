import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Service } from '../service.service';
import { formCls } from './formModel';
import { matcher } from './matcher';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
})
export class BusinessComponent implements OnInit {
  formValue: FormGroup;
  item: formCls = new formCls();
  list: Array<formCls>;
  table: string = 'table_';
  entity: string;
  submitted: boolean;
  id: number;

  private subscription: any;

  constructor(
    private service: Service,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.id = parseInt(params['id']);
      console.log(this.id);
      this.createTable(this.id, this.table);
    });

    this.getItems(this.entity);

    this.formValue = this.formBuilder.group(
      {
        id: [''],
        title: ['', [Validators.required]],
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: ['', Validators.required],
        date: ['', [Validators.required]],
      },
      {
        validator: matcher('password', 'confirmPassword'),
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(values) {
    console.log(values);   
    this.submitted = true;
    values.id ? this.updateItem(values) : this.createItem(values);
    
  }

  getItems(entity) {
    return this.service.findAllItemsEntity(entity)
  }

  createItem(data) {
    this.item = data;
    this.item.id = this.id;
    console.log(this.item.id);   
    if (this.formValue.valid) {
      this.service._createItemEntity(this.entity, this.item).subscribe((data: any) => {
        this.formValue.reset();
      });
    }
  }

  updateItem(data) {
    if (this.formValue.valid) {
      this.item = data;
      this.service
        .updateItemEntity(this.entity, this.item.id, this.item)
        .subscribe((data) => {
          this.formValue.reset();
          this.item = null;
        });
    }
  }

  get form() {
    return this.formValue.controls;
  }

  createTable(id: number, table: string): string {
    return (this.entity = table.concat(id.toString()));
  }

  goBack() {
    this.router.navigate(['/'])
  }

  onReset(): void {
    this.submitted = false;
    this.formValue.reset();
  }
}
