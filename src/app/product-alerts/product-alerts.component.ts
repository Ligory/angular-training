import { Component, OnInit,OnDestroy,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit,OnDestroy {

   @Input() product;

  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy(){

  }

  notifyMe(){
this.notify.emit();
  }

}