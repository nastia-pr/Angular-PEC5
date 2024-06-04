import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesDetailComponent } from './images-detail.component';

describe('ImagesDetailComponent', () => {
  let component: ImagesDetailComponent;
  let fixture: ComponentFixture<ImagesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
