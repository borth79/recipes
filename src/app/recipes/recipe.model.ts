export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients = {};

  constructor(name: string, description: string, imagePath: string, ingredients: object) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }

}
