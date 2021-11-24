import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from '../assets/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
Feather.loadFont();
class Item extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconWrapper} >
          <Image style = {styles.icon} source = {this.props.source} />
        </View>
        <View style={styles.bot}>
          <View style={styles.text}>
            <Text style={styles.name}>{this.props.fruit}</Text>
            <Text style={styles.description}>{this.props.details}</Text>
          </View>
          <View>
          <TouchableOpacity style={styles.addToCart}> 
            <Feather name="plus-circle" style={styles.addButton} size = {20}/>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginRight: 20,
    borderRadius: 20,
    width: 150,
    height: 300,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    padding: 0,
  },
  name: {
      fontSize: 18,
      fontFamily: 'Verdana',
      fontWeight: '500',
      marginBottom: 10
  },
  description: {
    fontSize: 14,
    fontFamily: 'Verdana'
  },
  icon: {
    resizeMode: 'contain',
    height: 100
  },
  text: {
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'column',
  },
  iconWrapper: {
    alignItems: 'center',
    width: '100%'
  },
  addButton: {
    color: colors.red
  },
  addToCart: {
    alignItems: 'center',
  },
  bot: {
    width: '100%',
    height: 150,
    justifyContent: 'space-between',
  }
});

export default Item;