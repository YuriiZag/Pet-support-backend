import { Ingredients } from "./../interfaces/recipe";
import Pet from "../models/pet.model";
import Recipe from "../models/recipe";
import User from "../models/user.model";
import Ingredient from "../models/ingredients";


export const getUsersPetsInfo = async (userId: string) => {
  const petsInfo = await Pet.find({ owner: userId });
  const userInfo = await User.find({ _id: userId });
  const info = {
    petsInfo,
    userInfo,
  };

  return info;
};

export const changeUserInfo = async (userId: string, body: any) => {
  const changedUser = await User.findOneAndUpdate({ _id: userId }, body);
  console.log(changedUser);

  return changedUser;
};



export const updateRecipe = async (
  recipeId: string,
  body: any
) => {
  const favoriteRecipe = await Recipe.findOneAndUpdate({
    _id: recipeId
  },
  body);

  return favoriteRecipe;
};
export const setFavoriteRecipe = async (
  recipeId: string,
  { favorite }: { favorite: boolean }
) => {
  const favoriteRecipe = await Recipe.findOneAndUpdate({
    _id: recipeId
  },
  {favorite});

  return favoriteRecipe;
};
export const getFavoriteRecipe = async () => {
  const favoriteRecipes = await Recipe.find({
    favorite: true
  },);

  return favoriteRecipes;
};
export const getSavedRecipe = async () => {
  const favoriteRecipes = await Recipe.find({
    saved: true
  },);

  return favoriteRecipes;
};
export const setSavedRecipe = async (
  recipeId: string,
  { saved }: { saved: boolean }
) => {
  const savedRecipe = await Recipe.findOneAndUpdate({
    _id: recipeId
  },
  {saved});

  return savedRecipe;
};
export const getAllRecipe = async () => {
  const recipes = await Recipe.aggregate([
    {
      $lookup: {
        from: "ingredients",
        localField: "ingredients.id",
        foreignField: "_id",
        as: "ingredientsData",
      },
    },
    {
      $project: {
        _id: 1,
        title: 1,
        category: 1,
        area: 1,
        instructions: 1,
        description: 1,
        thumb: 1,
        preview: 1,
        time: 1,
        youtube: 1,
        tags: 1,
        createdAt: 1,
        updatedAt: 1,
        favorite: 1,
        saved:1,
        ingredients: {
          $map: {
            input: "$ingredients",
            as: "ingredient",
            in: {
              id: "$$ingredient.id",
              measure: "$$ingredient.measure",
              name: {
                $arrayElemAt: [
                  {
                    $filter: {
                      input: "$ingredientsData",
                      cond: { $eq: ["$$this._id", "$$ingredient.id"] },
                    },
                  },
                  0,
                ],
              },
            },
          },
        },
      },
    },
  ]);
  return recipes;
};
