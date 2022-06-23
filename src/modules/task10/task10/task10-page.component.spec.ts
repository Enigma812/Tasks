import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task10PageComponent } from './task10-page.component';

describe('Task10Component', () => {
  let component: Task10PageComponent;
  let fixture: ComponentFixture<Task10PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Task10PageComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task10PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
