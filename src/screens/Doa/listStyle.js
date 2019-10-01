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
  header: {
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    fontSize: 20,
  },
  typelist: {
    backgroundColor: 'rgba(61, 61, 61, 0.55)',
    width: '100%',
    height: '25%',
    paddingLeft: '30%',
    justifyContent: 'center'
  },
  type: {
    width: '100%',
    fontSize:20,
    letterSpacing: 1,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color:'#fff',
    alignItems: 'center'
  },
  back: {
    width: 30,
    height:40,

  },
  touch: {
    margin: 10,
    marginBottom: 0,
    marginTop: 15,
    height: '95%',
    backgroundColor: '#fff',
    borderRadius: 16
  }
});


export default styles;
