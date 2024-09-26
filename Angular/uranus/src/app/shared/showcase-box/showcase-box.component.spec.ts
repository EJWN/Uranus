import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseBoxComponent } from './showcase-box.component';

describe('ShowcaseBoxComponent', () => {
  let component: ShowcaseBoxComponent;
  let fixture: ComponentFixture<ShowcaseBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaseBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
