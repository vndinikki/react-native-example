import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Detail from './Detail';
import History from './History';

// A very simple reducer

const initState = {
  cards: [],
};
export function reducer(state = initState, action) {
  if (typeof state === 'undefined') {
    return 0;
  }
  const { type, payload } = action;

  switch (type) {
    case 'PUSH_CARD':
      return {
        cards: [...state.cards, payload],
        color: 'red',
      };
    case 'POP_CARD':
      return state - 1;
    default:
      return state;
  }
}

const getData = async () => {
  try {
    const response = await fetch('https://picsum.photos/v2/list');
    const json = await response.json();
    const data = json;
  } catch (error) {
    console.error(error);
  }
};

// A very simple store
let store = createStore(combineReducers({ cards: reducer }));

// Connect the screens to Redux
let HomeConnect = connect((state) => ({ cards: state.cards }))(Home);
let DetailConnect = connect((state) => ({ cards: state.cards }))(Detail);
let HistoryConnect = connect((state) => ({ cards: state.cards }))(History);

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const Stack = createStackNavigator();

const MyStack = (props) => {
  return (
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeConnect}
          initialParams={{ data: props.data }}
          options={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailConnect}
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="History"
          component={HistoryConnect}
          options={{ headerStyleInterpolator: forFade }}
        />
      </Stack.Navigator>
    </Provider>
  );
};

export default MyStack;
