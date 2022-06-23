import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task7PageComponent } from './task7-page.component';

describe('Task7Component', () => {
  let component: Task7PageComponent;
  let fixture: ComponentFixture<Task7PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Task7PageComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task7PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
