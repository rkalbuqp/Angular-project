import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBlockComponent } from './image-block.component';

describe('ImageBlockComponent', () => {
  let component: ImageBlockComponent;
  let fixture: ComponentFixture<ImageBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
