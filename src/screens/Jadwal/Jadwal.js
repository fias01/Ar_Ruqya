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
  ImageBackground
} from 'react-native';

import axios from 'axios';
import styles from './style';
import Icon from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get('window');

class Jadwal extends Component {

  state = {
    prayTime: false,
  }

  componentDidMount() {
    this.getPrayTime()
  }

  getPrayTime() {
    var bulan =["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    var today = new Date();
    var month = bulan[today.getMonth()];
    var year = today.getFullYear();

    axios.get("http://api.aladhan.com/v1/calendarByCity?city=Yogyakarta&country=Indonesia&method=11&month=" + month + " &year= " + year + " ")
    .then( (response) => {
      var date = new Date();
      var tgl = parseInt(date.getDate()) - 1;
      let prayTime = response.data.data[tgl]
      this.setState({
        prayTime : prayTime
      })
    })
    .catch((err) => {
      alert("Unable To Connect")
    })
  }

  renderTime () {
    const { prayTime } = this.state;
    const { navigation } = this.props;
    return(
      <View style={[styles.flex, styles.column, { paddingHorizontal: 25, alignItems: 'center', }]}>
        <View style={[styles.timeContainer,{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15}]}>
          <Text style={[styles.timeLocation]}>Sleman, Yogyakarta</Text>
          <TouchableOpacity style={{alignSelf: 'flex-end',}} onPress={() => navigation.navigate('Jadwal')}>
            <Text style={{fontSize: 10, color: '#fff'}}>Selengkapnya  ></Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 6,
            paddingBottom: 17,
            backgroundColor: '#f2fcf4',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            flexDirection: 'row'
          }}>

        </View>
      </View>
    );
  }

  render() {
      const { prayTime } = this.state;
      const { navigation } = this.props;
      return (
        <View style={{flex: 1, backgroundColor: '#ecf2f5'}}>

          <View style={{backgroundColor:'#ffffff', padding: 20, paddingBottom: 5,flexDirection: 'row'}}>
            <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" color={'rgb(171, 170, 172)'} size={23} />
            </TouchableOpacity>
            <Text style={styles.header}> Jadwal Shalat </Text>
          </View>

          <View style={{paddingLeft: 10, paddingRight: 10, height: '30%', marginBottom: 30}}>
              <ImageBackground
                style={[styles.container]}
                imageStyle={{ borderRadius: 8 }}
                source={ require('../../../assets/images/masjid.jpg') }
              >
                <View style={[styles.row, { justifyContent: 'center' , width: '58%'}]}>
                  <View style={[styles.column, { flex: 2, paddingHorizontal: 25 / 2 }]}>
                    <Text style={{ color: 'rgb(3, 48, 6)', fontWeight: 'bold', fontSize: 22, marginBottom: 20}}>Shalatlah Tepat Waktu</Text>
                    <Text style={{ color: 'rgb(91, 96, 92)' , textAlign: 'justify', fontSize: 15,}}>“Sesungguhnya shalat memiliki waktu yang telah ditetapkan bagi orang beriman.”</Text>
                    <Text style={{ color: 'rgb(34, 91, 38)' , textAlign: 'justify',}}>(QS. An Nisaa’: 103)</Text>

                  </View>
                </View>
              </ImageBackground>
          </View>

          <View style={{paddingLeft: 10, paddingRight: 10}}>
            <View style={styles.content}>
              <Text style={styles.shalat}>Imsak</Text>
              <Text style={styles.waktu}>{prayTime ? prayTime.timings.Imsak.substr(0,6) : "00:00"}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.shalat}>Shubuh</Text>
              <Text style={styles.waktu}>{prayTime ? prayTime.timings.Fajr.substr(0,6) : "00:00"}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.shalat}>Dhuhur</Text>
              <Text style={styles.waktu}>{prayTime ? prayTime.timings.Dhuhr.substr(0,6) : "00:00"}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.shalat}>Ashar</Text>
              <Text style={styles.waktu}>{prayTime ? prayTime.timings.Asr.substr(0,6) .substr(0,6) : "00:00"}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.shalat}>Magrib</Text>
              <Text style={styles.waktu}>{prayTime ? prayTime.timings.Maghrib.substr(0,6) : "00:00"}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.shalat}>Isa</Text>
              <Text style={styles.waktu}>{prayTime ? prayTime.timings.Isha.substr(0,6) : "00:00"}</Text>
            </View>
          </View>

        </View>
      );
    }
  }


export default Jadwal;
