import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-csg-plan-modal',
  templateUrl: './csg-plan-modal.component.html',
  styleUrls: ['./csg-plan-modal.component.scss'],
})
export class CsgPlanModalComponent implements OnInit {
  @Input() date: any;

  constructor(private modalController: ModalController, private navParams: NavParams) {
    console.log(this.navParams.get('date'));
  }

  ngOnInit() {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
