import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuestCreatePlanMenuPopoverComponent } from './guest-create-plan-menu-popover.component';

describe('GuestCreatePlanMenuPopoverComponent', () => {
  let component: GuestCreatePlanMenuPopoverComponent;
  let fixture: ComponentFixture<GuestCreatePlanMenuPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestCreatePlanMenuPopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuestCreatePlanMenuPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
