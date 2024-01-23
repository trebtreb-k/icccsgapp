import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-guest-plan-popover',
  templateUrl: './guest-plan-popover.component.html',
  styleUrls: ['./guest-plan-popover.component.scss'],
})
export class GuestPlanPopoverComponent implements OnInit {
  constructor(private router: Router, private Popover: PopoverController) {}

  ngOnInit() {}

  typeCreate(data: any) {
    console.log(data);

    this.Popover.dismiss({ dismissed: true, type: data });
  }
}
