//import liraries
import React, { Component } from 'react';
import { View } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Text,
} from 'react-native-paper';
import Collapsible from 'react-native-collapsible';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const CardsContainer = (props) => {
  return (
    <View>
      <Card>
        <Card.Title
          title={props.item.id}
          subtitle={props.item.author}
          left={LeftContent}
        />
        <Card.Content>
          <Paragraph>
            Author: {props.item.author}
            <Hyperlink linkDefault={true}>
              <Text style={{ fontSize: 15, color: 'red' }}>
                {props.item.url}
              </Text>
            </Hyperlink>
          </Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: `${props.item.download_url}` }} />
      </Card>
    </View>
  );
};
export default CardsContainer;
