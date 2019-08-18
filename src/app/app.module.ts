import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeIngredientComponent } from './recipes/recipe-list/recipe-ingredient/recipe-ingredient.component';
import { RecipeServingsComponent } from './recipes/recipe-list/recipe-servings/recipe-servings.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListLayoutComponent } from './layouts/recipe-list-layout/recipe-list-layout.component';
import { RecipeListCardComponent } from './recipes/recipe-list-card/recipe-list-card.component';
import { RecipeCardComponent } from './recipes/recipe-card/recipe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeIngredientComponent,
    RecipeServingsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeListLayoutComponent,
    RecipeListCardComponent,
    RecipeCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
