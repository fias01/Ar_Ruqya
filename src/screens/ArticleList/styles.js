import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({

  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  articles: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  header: {
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    fontSize: 20,
  },
  menuImage: {
    width: (width - (50)) / 2,
    height: (width - (50)) / 2,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 25 / 2,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  back: {
    width: 30,
    height:40,
    alignItems: 'flex-start',
  },
  textJudul: {
     padding:6,
     fontSize:20,
     fontFamily: 'SourceSansPro',
     fontWeight: 'bold',
     textAlign: 'center',
     color:'rgb(138, 138, 138)',
     alignItems: 'center',
     justifyContent: 'center'
  },
  Title: {
     fontSize:23,
     fontFamily: 'lotus-linotype-light',
     color:'#000',
     fontWeight: 'bold',
     alignItems: 'center',
     paddingTop: 5,
     paddingLeft: 10,
  },
});


export default styles;
