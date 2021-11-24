import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard, Image, ScrollView, SafeAreaView, FlatList} from 'react-native';
import Item from './components/Item'
import colors from './assets/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import { Colors } from 'react-native/Libraries/NewAppScreen';
Feather.loadFont();
class App extends Component{
  state = {
    search: '',
  };
  filterList(list) {
    return list.filter(
      (listItem) =>
        listItem.fruit.toString()
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        listItem.details.toString().toLowerCase().includes(this.state.search.toLowerCase()),
    );
  }

  render() {
    const list = [
      {id: 1, fruit: 'apple', details: 'a regular apple. healthy', source: require('./images/apple.png'), selected: false},
      {id: 2, fruit: 'banana', details: 'just a singular banana', source: require('./images/banana.png'), selected: false},
      {id: 3, fruit: 'green apple', details: 'an apple that is green', source: require('./images/green-apple.png'), selected: false},
      {id: 4, fruit: 'red apple', details: 'similar to an apple that is green, but is red', source: require('./images/red-apple.png'), selected: false},
      {id: 5, fruit: 'apricot', details: 'looks like an an apple. but isn\'t', source: require('./images/apricot.png'), selected: false},
      {id: 6, fruit: 'kiwi', details: 'hairy green fruit', source: require('./images/kiwi.png'), selected: false},
      {id: 7, fruit: 'strawberry', details: 'look better than they taste, honestly', source: require('./images/strawberry.png'), selected: false},
      {id: 8, fruit: 'pear', details: 'nickelodean had a whole brand of technology with these', source: require('./images/pear.png'), selected: false},
      {id: 9, fruit: 'mango', details: 'the fruit of teh philippines!', source: require('./images/mango.png'), selected: false},
      {id: 10, fruit: 'bananas', details: 'multiple banana', source: require('./images/bananas.png'), selected: false},
      {id: 11, fruit: 'grapes', details: 'a miniature watermelon. eat like popcorn', source: require('./images/grapes.png'), selected: false},
      {id: 12, fruit: 'peach', details: 'one of the characters from Netflix\'s hit series You is fruitd after this fruit.', source: require('./images/peach.png'), selected: false},
      {id: 13, fruit: 'raspberry', details: 'i don\'t know how to decribe this one', source: require('./images/raspberry.png'), selected: false},
      {id: 14, fruit: 'plum', details: 'a large purple grape mixed with a peach', source: require('./images/plum.png'), selected: false},
      {id: 15, fruit: 'blueberry', details: 'every single one tastes different. most of them taste bad', source: require('./images/blueberry.png'), selected: false},
    ];

    const veggies = [
      {fruit: 'bok choy', details: 'i thought this was cabbage for the longest time', source: require('./images/bok-choy.png')},
      {fruit: 'broccoli', details: 'give it a chance! it tastes good with seasoning', source: require('./images/broccoli.png')},
      {fruit: 'broccoli rabe', details: 'including this one to test if it will show up when you search for \'broccoli\'', source: require('./images/broccoli-rabe.png')},
      {fruit: 'brussel sprouts', details: 'literally never had them I wouldn\'t know', source: require('./images/brussel-sprouts.png')},
      {fruit: 'green cabbage', details: 'tastes good in nilaga!!! highly recommend in this specific dish only', source: require('./images/green-cabbage.png')},
      {fruit: 'red cabbage', details: 'stains things. 0/10 would not recommend', source: require('./images/red-cabbage.png')},
      {fruit: 'carrot', details: 'don\'t let media fool you! i ate these as a child and my vision is still terrible', source: require('./images/carrot.png')},
      {fruit: 'cauliflower', details: 'same deal as broccoli, i actually highly recommend WITH broccoli', source: require('./images/cauliflower.png')},
      {fruit: 'edamame', details: 'aye lil mama yeah you heard about me, imma pop you like a pea, yeah edamame', source: require('./images/edamame.png')}
    ];
    return (
      <View style={styles.container}>
        <View> 
          <Text  style = {styles.screenTitle}> The Xircle Store </Text>
          <Text style={styles.subtitle}> Your Friendly Neighborhood Grocery Store</Text>
        </View>
        <View style={styles.writeTaskWrapper}>
          <Feather name="search" size={18} style={styles.searchIcon} />
          <TextInput
            onChangeText={(search) => this.setState({search})}
            style={styles.searchBar}
            placeholder = 'Search...'
          />
        </View>
        <ScrollView>
          <View style={styles.categoryListWrapper}>
            <Text style = {styles.categoriesTitle}>Fruits </Text>
            <ScrollView horizontal={true}> 
              {this.filterList(list).map((listItem, index) => (
                <Item key={index} fruit={listItem.fruit} details={listItem.details} source={listItem.source} />
              ))}
            </ScrollView>
          </View>

          <View style={styles.categoryListWrapper}> 
            <Text style = {styles.categoriesTitle}>Vegetables </Text>
            <ScrollView horizontal={true}> 
              {this.filterList(veggies).map((listItem, index) => (
                <Item key={index} fruit={listItem.fruit} details={listItem.details} source={listItem.source} />
              ))}
            </ScrollView>
          </View>
          </ScrollView>
      </View>
    );
  }
}

export default App;
const styles = StyleSheet.create({
  screenTitle: {
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    fontSize: 24,
    color: Colors.white
  },
  subtitle: {
    fontFamily: 'Verdana',
    color: Colors.white
  },
  container: {
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: colors.red,
    flex: 1
  },
  searchBar: {
    fontSize: 16,
    margin: 10,
    marginLeft: 0,
    paddingHorizontal: 15,
    borderColor: '#c0c0c0',
    flex: 1,
    marginLeft: 10,
  },
  searchIcon: {
    paddingLeft: 10
  },
  writeTaskWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  categoriesTitle: {
    fontFamily: 'Verdana',
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 10
  },
  categoryListWrapper:{
    width: '100%',
    marginBottom: 20
  },
});
