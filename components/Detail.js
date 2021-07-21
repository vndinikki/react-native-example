import * as React from 'react';
import CardsContainer from './CardsContainer';
import { Button, Card, Title } from 'react-native-paper';

export default function Detail({ cards, route, navigation }) {
  const { item } = route.params;
  return (
    <Card>
      <Title>Details Screen</Title>
      <CardsContainer item={item} />
      <Card.Actions>
        <Button onPress={() => navigation.navigate('Home')}> Home </Button>
        <Button onPress={() => navigation.navigate('History')}>History</Button>
      </Card.Actions>
    </Card>
  );
}
