import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

import CategoriesScreen from "./../screens/CategoriesScreen";
import CategoryMealsScreen from "./../screens/CategoryMealsScreen";
import MealDetailsScreen from "./../screens/MealDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator,
  },
  Favorites: FavoritesScreen,
});

export default createAppContainer(MealsFavTabNavigator);
