import React, { useEffect, useState } from 'react';
import { createStore } from 'redux';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './components/MyStack';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch('https://picsum.photos/v2/list');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <NavigationContainer>
      {data.length === 0 ? <ActivityIndicator /> : <MyStack data={data} />}
    </NavigationContainer>
  );
};

export default App;
