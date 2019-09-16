import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';
import styles from './listStyle';
import Icon from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get('window');

class DoaList extends Component {

  render() {
      const { navigation } = this.props;
      return (
        <View style={{flex: 1, backgroundColor: '#ecf2f5'}}>

          <View style={{backgroundColor:'#ffffff', padding: 20, paddingBottom: 5,flexDirection: 'row'}}>
            <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" color={'rgb(171, 170, 172)'} size={23} />
            </TouchableOpacity>
            <Text style={styles.header}> Doa Ruqyah</Text>
          </View>

          <View style={[styles.flex, styles.column, {height: '85%',}]}>
            <TouchableOpacity style={[styles.row, styles.touch]}>
              <View style={{paddingRight: 20,}}>
                <Text style={[styles.type]}>Ayat Al Qur'an</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.row, styles.touch]}>
              <View style={{paddingRight: 20,}}>
                <Text style={[styles.type]}>Doa Dalam Hadist </Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      );
    }
  }


export default DoaList;
