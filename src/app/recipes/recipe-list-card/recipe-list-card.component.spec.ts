import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListCardComponent } from './recipe-list-card.component';

describe('RecipeListCardComponent', () => {
  let component: RecipeListCardComponent;
  let fixture: ComponentFixture<RecipeListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
