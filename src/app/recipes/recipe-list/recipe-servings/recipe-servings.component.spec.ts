import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeServingsComponent } from './recipe-servings.component';

describe('RecipeServingsComponent', () => {
  let component: RecipeServingsComponent;
  let fixture: ComponentFixture<RecipeServingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeServingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeServingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
