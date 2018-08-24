import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


export default class App extends React.Component {

  state={
    headerTitle: 'Albums'
    // name: 'person',
    // age: 21,
    // isTrue: true,
    // data: []
  }

  render() {
    const {headerTitle} = this.state

    return (
    <View style={{flex: 1}}> 
       <Header headerText={headerTitle}/>
       <AlbumList />
       {/* <Text>my name is {name}</Text>
       <Text>my age is {age}</Text>
       <Text>{isTrue}</Text> */}
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
