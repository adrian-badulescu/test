import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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

  constructor(private service: Service, public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      date: ['', [Validators.required]],
      active: ['', [Validators.required]],
    });
  }

  onSubmit(table, values: formCls) {
    values.id ? this.updateItem(table, values) : this.createItem(table, values);
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
