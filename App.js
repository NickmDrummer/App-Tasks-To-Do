import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddmode] = useState(false);

  const addGoalHandler = goalTitle => {
    if (goalTitle.length === 0) {
      return;
    }

    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddmode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddmode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddmode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

// <View
//   style={{
//     padding: "10%",
//     flexDirection: "row",
//     width: "80%",
//     height: 300,
//     justifyContent: "space-around",
//     alignItems: "stretch"
//   }}
// >
//   <View
//     style={{
//       backgroundColor: "red",
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center"
//     }}
//   >
//     <Text>Uno</Text>
//   </View>

//   <View
//     style={{
//       backgroundColor: "blue",
//       flex: 2,
//       justifyContent: "center",
//       alignItems: "center"
//     }}
//   >
//     <Text>Dos</Text>
//   </View>
//   <View
//     style={{
//       backgroundColor: "green",

//       justifyContent: "center",
//       alignItems: "center"
//     }}
//   >
//     <Text>Tres</Text>
//   </View>
// </View>
