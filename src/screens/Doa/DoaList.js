import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, View } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Ayat from './Ayat';
import Hadist from './Hadist';

export default class DoaList extends Component {
  render() {
    return (
      <Container>
        <View style={{backgroundColor:'#ffffff', padding: 20, paddingBottom: 5,flexDirection: 'row'}}>
          <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" color={'rgb(171, 170, 172)'} size={23} />
          </TouchableOpacity>
          <Text style={styles.header}> Do'a Ruqyah</Text>
        </View>

        <Tabs>
          <Tab heading={ <TabHeading style={styles.tab}><Text style={styles.name}>Al Qur'an</Text></TabHeading>}>
            <Ayat />
          </Tab>
          <Tab heading={ <TabHeading style={styles.tab}><Text style={styles.name}>Hadist</Text></TabHeading>}>
            <Hadist />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
   back: {
     width: 30,
     height:40,
     alignItems: 'flex-start',
   },
   header: {
     fontWeight: 'bold',
     fontSize: 20,
   },
   tab: {
     backgroundColor: 'rgb(168, 168, 168)',
   },
   name: {
     color: '#fff',
     fontWeight: 'bold',
     fontFamily: 'Roboto',
     fontSize: 17,
   }
  })
