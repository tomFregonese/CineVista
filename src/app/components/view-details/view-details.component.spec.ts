  import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
  import { IonicModule } from '@ionic/angular';

  import { ViewDetailsComponent } from './view-details.component';

  describe('ViewDetailsComponent', () => {
    let component: ViewDetailsComponent;
    let fixture: ComponentFixture<ViewDetailsComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ ViewDetailsComponent ],
        imports: [IonicModule.forRoot()]
      }).compileComponents();

      fixture = TestBed.createComponent(ViewDetailsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }));

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
