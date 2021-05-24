import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import MatchigCardsScreen from '../screens/matchingCards';

const Stack = createStackNavigator();
export default function Router() {
  return (
      <Stack.Navigator initialRouteName="matchingCards" headerMode="none">
          <Stack.Screen name="matchingCards" component={MatchigCardsScreen} />
      </Stack.Navigator>
  );
}
