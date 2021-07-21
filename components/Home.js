import React, { useEffect, useState } from 'react';
import { View, Animated, FlatList } from 'react-native';
import CardsContainer from './CardsContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Card, Title, Paragraph, Text, List } from 'react-native-paper';

export default function Home({ cards, dispatch, navigation, route }) {
  const { data } = route.params;
  const handleClick = (item) => {
    dispatch({ type: 'PUSH_CARD', payload: item });
    navigation.navigate('Detail', {
      item: { ...item },
      isCollapsible: false,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Title>List of Authors</Title>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <View>
            <List.Item
              title={item.id}
              description={item.author}
              left={(props) => (
                <Icon.Button
                  name="instagram"
                  backgroundColor="#3b5998"
                  onPress={() => handleClick(item)}
                ></Icon.Button>
              )}
            />
          </View>
        )}
      />
    </View>
  );
}
