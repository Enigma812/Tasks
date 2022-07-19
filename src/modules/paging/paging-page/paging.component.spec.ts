import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingPageComponent } from './paging.component';

describe('PagingPageComponent', () => {
  let component: PagingPageComponent;
  let fixture: ComponentFixture<PagingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
