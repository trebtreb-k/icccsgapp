import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-csg-plan-popover',
  templateUrl: './csg-plan-popover.component.html',
  styleUrls: ['./csg-plan-popover.component.scss'],
})
export class CsgPlanPopoverComponent implements OnInit {
  constructor(private router: Router, private Popover: PopoverController) {}

  ngOnInit() {}

  typeCreate(data: any) {
    console.log(data);

    this.Popover.dismiss({ dismissed: true, type: data });
  }
}
