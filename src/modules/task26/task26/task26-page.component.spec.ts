import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task26PageComponent } from './task26-page.component';

describe('Task26Component', () => {
  let component: Task26PageComponent;
  let fixture: ComponentFixture<Task26PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Task26PageComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Task26PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
