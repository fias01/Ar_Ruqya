import React, {Component} from "react";
import ayat from '../../data/ayat'
import {Content, Card, CardItem,Body} from 'native-base';
import Icon from "react-native-vector-icons/MaterialIcons";
import { View,TouchableHighlight,Image, Text,StyleSheet,ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
// const ayat = [
//   {
//     "id": 1,
//     "surat": "Al Fatihah",
//     "ayat":"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ * الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ * الرَّحْمَٰنِ الرَّحِيمِ * مَالِكِ يَوْمِ الدِّينِ * إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ * اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ * صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ  ",
//     "arti": "1.Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang. 2.Segala puji bagi Allah, Tuhan semesta alam. 3.Yang Maha Pengasih, Maha Penyayang. 4.Pemilik hari pembalasan. 5.Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan. 6.Tunjukilah kami jalan yang lurus. 7.(yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.",
//   },
// ]
export default class Ayat extends Component{
  render(){
    return(
      <View style={{flex:1, backgroundColor:'#ecf2f5'}}>

        <View style={{backgroundColor:'#ffffff', padding: 20, paddingBottom: 5,flexDirection: 'row'}}>
          <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" color={'rgb(171, 170, 172)'} size={23} />
          </TouchableOpacity>
          <Text style={styles.header}> Ayat Ruqyah</Text>
        </View>

        <ScrollView
          scrollEnabled
          showsHorizontalScrollIndicator={true}
          style={{flex:3, margin:6, marginTop:10
        }}>
          {ayat.map((item, index) =>
            <View  key={index} style={styles.wrapper}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.judul, styles.textdetail, {flex: 11}]}>{item.surat}</Text>
                <TouchableOpacity style={{flex: 1}}>
                  <View style={{width: 40, height: 40, alignItems: 'center', justifyContent: 'center'}}>
                    <Icon style={{fontWeight:'bold', fontSize:25}} name='content-copy' />
                  </View>
                </TouchableOpacity>
              </View>
		      		<Text style={styles.arab}>{item.arab}</Text>
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
