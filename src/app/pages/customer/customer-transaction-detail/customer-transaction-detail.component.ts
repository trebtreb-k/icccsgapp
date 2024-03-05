import { Component, Input, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-customer-transaction-detail',
  templateUrl: './customer-transaction-detail.component.html',
  styleUrls: ['./customer-transaction-detail.component.scss'],
})
export class CustomerTransactionDetailComponent implements OnInit {
  @Input() state: any;

  header: any;
  body: any;
  isHeaders = false;

  footer = {
    items: null,
    total: null,
    discount: null,
    netamout: null,
  };

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.header = this.state.header;
    this.body = this.state.body;

    console.log(this.state.header);
    console.log(this.state.body);

    this.footerSum();
  }

  footerSum() {
    let items = 0;
    let total = 0;
    let discount = 0;

    for (const x of this.body) {
      items += x.qty;
      total += !x.total_price ? 0 : x.total_price;
      discount += !x.discount_amount ? 0 : x.discount_amount;
    }

    const netamout = total - discount;

    this.footer.items = items;
    this.footer.total = total;
    this.footer.discount = discount;
    this.footer.netamout = netamout;
  }

  dismiss() {
    this.modalController.dismiss({ dismissed: false });
  }
}
