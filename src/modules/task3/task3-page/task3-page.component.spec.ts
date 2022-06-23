import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3PageComponent } from './task3-page.component';

describe('Task3Component', () => {
  let component: Task3PageComponent;
  let fixture: ComponentFixture<Task3PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Task3PageComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
