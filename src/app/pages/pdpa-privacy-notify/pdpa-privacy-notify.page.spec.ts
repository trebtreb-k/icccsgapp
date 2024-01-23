import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PdpaPrivacyNotifyPage } from './pdpa-privacy-notify.page';

describe('PdpaPrivacyNotifyPage', () => {
  let component: PdpaPrivacyNotifyPage;
  let fixture: ComponentFixture<PdpaPrivacyNotifyPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PdpaPrivacyNotifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PdpaPrivacyNotifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
