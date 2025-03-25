import React from 'react';
import { Text, View, Image } from 'react-native';

export const OneCat = () => {

  const name = 'Maru';

  return <Text
    style={{
      marginTop: 100,
      marginLeft: 140,
      marginBottom: 40
    }}
  >Hello, I am {name}!</Text>;

};



const Cat = (props: { name: string }) => {
  return (
    <View style={{ marginLeft: 140 }}>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
};

export const Cafe = () => {
  return (
    <View>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
    </View>
  );
};

export const CatApp = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{ width: 200, height: 200, marginLeft: 90 }}
      />
      <Text style={{ marginLeft: 140 }}>Hello, I am your cat!</Text>
    </View>
  );
};
