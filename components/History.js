import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import CardsContainer from './CardsContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Card, Title, List } from 'react-native-paper';

export default function History({ cards, dispatch, navigation }) {
  return (
    <Card style={{ flex: 1 }}>
      <Title>List of Viewed Authors</Title>
      <Card.Actions>
        <Button onPress={() => navigation.navigate('Home')}> Home </Button>
        <Button onPress={() => navigation.navigate('History')}>History</Button>
      </Card.Actions>
      <FlatList
        data={cards.cards}
        renderItem={({ item, index }) => (
          <List.Item
            title={item.id}
            description={item.author}
            left={(props) => (
              <Icon.Button
                name="instagram"
                backgroundColor="#3b5998"
                onPress={() =>
                  navigation.navigate('Detail', {
                    item: { ...item },
                    isCollapsible: false,
                  })
                }></Icon.Button>
            )}
          />
        )}
      />
    </Card>
  );
}
