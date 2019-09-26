import React, { Component } from 'react'
import {
  Animated,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from "react-native-vector-icons/MaterialIcons";
import Octicons from 'react-native-vector-icons/Octicons';
import { mocks } from '../../data/data';
import styles from './styles';

const { width, height } = Dimensions.get('window');

class ArticleList extends Component {
  scrollX = new Animated.Value(0);

  renderList = () => {
    return (
      <View style={[ styles.column, styles.datahome]}>
        <FlatList
          vertical
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          data={this.props.datahome}
          keyExtractor={(item, index) => `${item.id}`}
          renderItem={({ item }) => this.list(item)}
        />
      </View>
    );
  }

  list = item => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Article', { article: item })}>
        <View style={{backgroundColor:'#ffffff', marginTop:10, padding:5, flexDirection: 'column'}}>
            <View style={[styles.column, styles.shadow,{
              backgroundColor: 'rgb(245, 245, 245)',
              width: width - 50,
              height: width * 0.3,
              marginHorizontal: 25,
              paddingHorizontal: 25,
              paddingVertical: 25 * 0.66,
              borderRadius: 12,
              }]}>
              <Text style={{ fontSize: 19, fontWeight: 'bold', paddingBottom: 8, }}>
                {item.title}
              </Text>
              <View style={[ styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', }]}>
                <Text style={{ color: 'rgb(133, 132, 132)' }}>
                  {item.description[0].split('').slice(0, 50)}...
                </Text>
                <FontAwesome
                  name="chevron-right"
                  size={12}
                  color={'#BCCCD4'}
                />
              </View>
            </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{paddingBottom: 70,}}>
        <View style={{backgroundColor:'#ffffff', padding: 20, paddingBottom: 5,flexDirection: 'row'}}>
          <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" color={'rgb(171, 170, 172)'} size={23} />
          </TouchableOpacity>
          <Text style={styles.header}> Artikel Islam</Text>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 15 }}>
          {this.renderList()}
        </ScrollView>
      </View>
    )
  }
}

ArticleList.defaultProps = {
  datahome: mocks,
};

export default ArticleList;
