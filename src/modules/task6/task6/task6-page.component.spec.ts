import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task6PageComponent } from './task6-page.component';

describe('Task6Component', () => {
  let component: Task6PageComponent;
  let fixture: ComponentFixture<Task6PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Task6PageComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task6PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
