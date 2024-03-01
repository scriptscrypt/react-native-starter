import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { typeDetailsScreenNavProp } from "../types/typeDetailsScreenNav";
import { StyleSheet } from "react-native";

const HelloWorld: React.FC = () => {
  const navigation = useNavigation<typeDetailsScreenNavProp>();
  const ids = [1, 2, 3, 4];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      {ids.map((id) => (
        <TouchableOpacity
          key={id}
          style={styles.button}
          onPress={() => navigation.navigate("Details", { id })}
        >
          <Text style={styles.buttonText}>Go to Details {id}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3498db", // Blue color
  },
  button: {
    marginTop: 5,
    padding: 10,
    backgroundColor: "#bee5eb", // Light blue background color
  },
  buttonText: {
    fontSize: 16,
  },
});
export default HelloWorld;
