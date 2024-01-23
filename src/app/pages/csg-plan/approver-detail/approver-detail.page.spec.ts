import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ApproverDetailPage } from './approver-detail.page';
import { IonicModule } from '@ionic/angular';

describe('ApproverDetailPage', () => {
  let component: ApproverDetailPage;
  let fixture: ComponentFixture<ApproverDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproverDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApproverDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
