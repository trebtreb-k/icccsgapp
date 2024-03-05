import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-approvers-list',
  templateUrl: './approvers-list.component.html',
  styleUrls: ['./approvers-list.component.scss'],
})
export class ApproversListComponent implements OnInit {
  @Input() props: any;

  approvers: any = [];
  approversInit: any = [];

  formSearch: FormGroup = this.formBuild.group({
    search: [''],
  });

  constructor(private formBuild: FormBuilder, private modalController: ModalController, private navParams: NavParams) {}

  ngOnInit() {
    const state = this.navParams.get('props').people;

    const image = (id: any) => `https://iccapp-minio.icc.co.th:9000/icchrapp/profile/${id}/${id}.jpg?alt=media`;
    const datas = state.map((param: any) => ({ ...param, image: image(param.empid) }));

    this.approvers = datas;
    this.approversInit = datas;

    console.log(datas[0]);
  }

  selected(param: any) {
    console.log(param);

    this.modalController.dismiss({ dismissed: true, person: param });
  }

  keySearch(ev: any) {
    const { search } = this.formSearch.value;

    if (!search) {
      this.approvers = this.approversInit;
    } else {
      const findData = this.approversInit.filter((param: any) => param.emp_name.toLowerCase().indexOf(search.toLowerCase()) > -1);
      this.approvers = findData;
    }
  }

  // * :: ----------------------------- :: * ปิดหน้าต่าง
  dismiss() {
    this.modalController.dismiss({ dismissed: false });
  }
}
