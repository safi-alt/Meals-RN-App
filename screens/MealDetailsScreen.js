import React from "react";

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import ListItem from "../components/ListItem";

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeals = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeals.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeals.duration}m</DefaultText>
        <DefaultText>{selectedMeals.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeals.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>

      {selectedMeals.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeals.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as Fav");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
});

export default MealDetailsScreen;
