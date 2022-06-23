import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task1PageComponent } from './task1-page.component';

describe('Task1Component', () => {
  let component: Task1PageComponent;
  let fixture: ComponentFixture<Task1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Task1PageComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
