import React, {Component} from "react";
import hadist from '../../data/hadist'
import {Content, Card, CardItem,Body} from 'native-base';
import Icon from "react-native-vector-icons/MaterialIcons";
import { View,TouchableHighlight,Image, Text,StyleSheet,ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default class Hadist extends Component{
  render(){
    return(
      <View style={{flex:1, backgroundColor:'#ecf2f5'}}>

        <ScrollView
          scrollEnabled
          showsHorizontalScrollIndicator={true}
          style={{flex:3, margin:6, marginTop:10
        }}>
          {hadist.map((item, index) =>
            <View  key={index} style={[styles.wrapper, {paddingTop: 50, paddingBottom: 15}]}>
		      		<Text style={[styles.arab]}>{item.arab}</Text>
		      		<Text style={styles.terjemahan}>{item.arti}</Text>
    				</View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
		backgroundColor: '#fff',
		width: Dimensions.get('window').width - 30,
		alignSelf: 'center',
		paddingTop: 20,
		paddingHorizontal: 15,
		margin: 15,
		marginTop: 0,
	},

  judul: {
    fontFamily: 'SourceSansPro',
    color: 'rgb(119, 119, 119)',
		alignSelf: 'center',
		fontSize: 23,
    fontWeight: 'bold',
		marginBottom: 30,
		marginTop: 5,
		textAlign: 'center',
		lineHeight: 30,
	},
	arab: {
		color: '#2C3445',
		fontSize: 30,
		marginBottom: 40,
		lineHeight: 40,
    fontFamily: 'Scheherazade',
    // fontWeight: 'bold',
	},
	terjemahan: {
		fontSize: 16,
		fontStyle: 'italic',
		lineHeight: 24,
    fontFamily: 'SourceSansPro',
    color: 'rgb(119, 119, 119)',
		marginBottom: 20,
    textAlign: 'justify',
	},

   back: {
     width: 30,
     height:40,
     alignItems: 'flex-start',
   },
   header: {
     fontWeight: 'bold',
     fontSize: 20,
   },

   copy: {
    fontFamily: 'SourceSansPro',
    fontSize: 17,
    textAlign:'center',
    // backgroundColor:'#00dfbe',
    backgroundColor:'#ecf2f5',
    padding:5,
    justifyContent:'center',
    marginTop:15,
    borderRadius: 10,
  },
  textCopy: {
    color:'#666666',
    fontSize:12
  },
  })
