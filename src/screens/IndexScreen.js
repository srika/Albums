import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import AlbumList from '../components/AlbumList';

const IndexScreen = () => {
  return (
    <View style={styles.container}>
      <AlbumList />
    </View>
  );
}

IndexScreen.navigationOptions = () => {
    return {
      headerTitleStyle: { textAlign: "center", alignSelf: "center" },
      //title: "Albums",
      //headerTintColor: '#fff',
      headerStyle: {
         backgroundColor: '#F8F8F8',
         shadowColor: '#000',
         shadowOffset: {width: 0,height:3},
         shadowOpacity: 0.5,
         elevation: 2
      },
      headerTitle: () => <Header title="Albums"/>
    };
  };
const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
});

export default IndexScreen;