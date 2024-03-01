import { StackNavigationProp } from "@react-navigation/stack";

export type typeRootStackParamList = {
  Home: undefined; // No parameters for Home
  Details: { id: number }; // Details accepts an 'id' parameter of type number
};
export type typeDetailsScreenNavProp = StackNavigationProp<
  typeRootStackParamList,
  "Details"
>;
