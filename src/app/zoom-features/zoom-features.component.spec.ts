import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomFeaturesComponent } from './zoom-features.component';

describe('ZoomFeaturesComponent', () => {
  let component: ZoomFeaturesComponent;
  let fixture: ComponentFixture<ZoomFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoomFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
