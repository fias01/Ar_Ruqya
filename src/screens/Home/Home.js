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
import Swiper from 'react-native-swiper';
import { listmenu, mocks } from '../../data/data';
import styles from './styles';
import axios from 'axios';
import * as theme from '../theme';

const { width, height } = Dimensions.get('window');

class Home extends Component {
  scrollX = new Animated.Value(0);

  renderAbout(){
    const { navigation } = this.props;
    return(
      <View style={{backgroundColor:'transparent', padding: 10,paddingBottom: 0, paddingLeft: 20, flexDirection: 'row',paddingTop: 0}}>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Icon name="info-outline" color={'rgb(5, 37, 9)'} size={30} />
        </TouchableOpacity>
      </View>
    );
  }

  renderDots() {
      const { datahome } = this.props;
      const dotPosition = Animated.divide(this.scrollX, width);
      return (
        <View style={[
          styles.flex, styles.row,
          { justifyContent: 'center', alignItems: 'center', marginTop: 6 }
        ]}>
          {datahome.map((item, index) => {
            const borderWidth = dotPosition.interpolate({
              inputRange: [index -1, index, index + 1],
              outputRange: [0, 2.5, 0],
              extrapolate: 'clamp'
            });
            return (
              <Animated.View
                key={`step-${item.id}`}
                style={[styles.dots, styles.activeDot, { borderWidth: borderWidth } ]}
              />
            )
          })}
        </View>
      )
    }

  renderArticles = () => {
      return (
        <View style={[ styles.column, styles.datahome ]}>
          <FlatList
            horizontal
            pagingEnabled
            maxToRenderPerBatch={3}
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            style={{ overflow:'visible', height: 250 }}
            data={this.props.datahome}
            keyExtractor={(item, index) => `${item.id}`}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
            renderItem={({ item }) => this.renderArticle(item)}
          />
          {this.renderDots()}
        </View>
      );
    }

  renderArticle = item => {
      const { navigation } = this.props;
      return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Article', { article: item })}>
          <ImageBackground
            style={[styles.flex, styles.article, styles.shadow, ]}
            imageStyle={{ borderRadius: 12 }}
            source={ item.preview }
          >
            <View style={[styles.row, { justifyContent: 'center' }]}>
              <View style={{ flex: 0 }}>
                <Image source={item.avatar} style={styles.avatar} />
              </View>
              <View style={[styles.column, { flex: 2, paddingHorizontal: 25 / 2 }]}>
                <Text style={{ color: '#fff', fontWeight: 'bold'}}>{item.name}</Text>
                <Text style={{ color: '#fff' }}> {item.location}</Text>
              </View>
            </View>
          </ImageBackground>

            <View style={[styles.column, styles.articleInfo, styles.shadow,]}>
              <Text style={{ fontSize: 19, fontWeight: 'bold', paddingBottom: 8, }}>
                {item.title}
              </Text>
              <View style={[ styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', }]}>
                <Text style={{ color: 'rgb(133, 132, 132)' }}>
                  {item.description[0].split('').slice(0, 50)}...
                </Text>
                <FontAwesome
                  name="chevron-right"
                  size={15 * 0.75}
                  color={'#BCCCD4'}
                />
              </View>
            </View>
        </TouchableOpacity>
      )
    }

  renderMenuList = () => {
    return (
      <View style={[styles.flex, styles.column ,{marginBottom: 120}]}>
        <View style={[ styles.row, styles.menuListHeader]} >
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#rgb(37, 36, 37)', marginBottom: 8}}>
            Menu Aplikasi
          </Text>
        </View>
        <View style={styles.column}>
          <FlatList
            vertical
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={15}
            snapToAlignment="center"
            style={[styles.shadow,]}
            data={this.props.datamenu}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) => this.renderMenu(item, index)}

          />

        </View>
      </View>
    );
  }
  renderMenu = (item, index) => {
    const { navigation } = this.props;
    const { datamenu } = this.props;
    const isLastItem = index === datamenu.length - 1;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.url)}
        style={[
        styles.flex,styles.menu, styles.shadow,]}>
        <View style={[styles.flex, {alignItems: 'center', }]}>
          <Image style={[styles.menuImage]} source={ item.preview } />
          <Text style={[styles.itemenu, {position: 'absolute', marginTop: '74%', fontWeight: 'bold', color: 'rgb(66, 66, 66)'}]}>{ item.title }</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View>
        <View style={[styles.flex, styles.row, styles.header,]}>
          <View style={{marginBottom: 10}}>
            <Text style={{ fontSize: 35 , fontWeight: 'bold', color: 'rgb(65, 65, 61)'}}>Ar Ruqya</Text>
            <Text style={{ color: 'rgb(83, 83, 83)'}}>All About Ruqyah in One App</Text>
          </View>
          <View>
            {this.renderAbout()}
          </View>
        </View>
        <ScrollView>
            {this.renderArticles()}

            {this.renderMenuList()}
        </ScrollView>
      </View>
    )
  }}

Home.defaultProps = {
  datamenu: listmenu,
  datahome: mocks,
};

export default Home;
