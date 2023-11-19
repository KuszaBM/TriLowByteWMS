import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsComponent } from './wms.component';

describe('WmsComponent', () => {
  let component: WmsComponent;
  let fixture: ComponentFixture<WmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WmsComponent]
    });
    fixture = TestBed.createComponent(WmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
