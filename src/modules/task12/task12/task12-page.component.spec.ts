import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task12PageComponent } from './task12-page.component';

describe('Task12PageComponent', () => {
  let component: Task12PageComponent;
  let fixture: ComponentFixture<Task12PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Task12PageComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Task12PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
