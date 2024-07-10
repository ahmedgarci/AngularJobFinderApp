import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostJobComponent } from './single-post.component';

describe('SinglePostJobComponent', () => {
  let component: SinglePostJobComponent;
  let fixture: ComponentFixture<SinglePostJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePostJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePostJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
