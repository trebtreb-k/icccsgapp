import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreatePlanPage } from './create-plan.page';
import { IonicModule } from '@ionic/angular';

describe('CreatePlanPage', () => {
  let component: CreatePlanPage;
  let fixture: ComponentFixture<CreatePlanPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePlanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
