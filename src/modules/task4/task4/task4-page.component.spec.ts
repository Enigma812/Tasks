import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task4PageComponent } from './task4-page.component';

describe('Task4Component', () => {
  let component: Task4PageComponent;
  let fixture: ComponentFixture<Task4PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Task4PageComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task4PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
