import React, {Component} from "react";
import ayat from '../../data/ayat'
import {Content, Card, CardItem,Body} from 'native-base';
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View,TouchableHighlight,Image, Text,StyleSheet,ScrollView, TouchableOpacity } from 'react-native';

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
          decelerationRate={0}
          style={{flex:3, margin:6, marginTop:10
        }}>


          {ayat.map((ayatlist, index) =>
            <View key={index} style={{backgroundColor:'#ffffff', marginTop:10, padding:12, marginBottom: 10}}>
              <Text style={styles.textJudul}>{ayatlist.surat}</Text>
              <Text style={styles.textArab}>{ayatlist.ayat}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   textJudul: {
      padding:6,
      fontSize:20,
      marginTop: 10,
      fontFamily: 'SourceSansPro',
      fontWeight: 'bold',
      textAlign: 'center',
      color:'rgb(138, 138, 138)',
      alignItems: 'center',
      justifyContent: 'center'
   },
   textArab: {
      fontSize:19,
      fontFamily: 'lotus-linotype-light',
      color:'#333333',
      marginTop:10,
      textAlign: 'auto',
      lineHeight: 35,
      letterSpacing: 2,
      marginBottom: 10
   },
   back: {
     width: 30,
     height:40,
     alignItems: 'flex-start',
   },
   header: {
     fontFamily: 'SourceSansPro',
     fontWeight: 'bold',
     fontSize: 20,
   },
  })
