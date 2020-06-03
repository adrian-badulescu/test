import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import {  IData } from './card/Idata';
import { data } from './mockedData/data';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data: Array<IData> = data;
  


  ngOnInit() {
    
  
  }
  title = 'app-test';



  trackById(index, business) {
    return business.id
  }






}
