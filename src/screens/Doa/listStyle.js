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
  type: {
    fontSize:20,
    letterSpacing: 1,
    color:'rgb(70, 70, 70)'
  },
  back: {
    width: 30,
    height:40,
    alignItems: 'flex-start',
  },
  touch: {
    margin: 6,
    marginBottom: 0,
    marginTop: 15,
    padding: 15,
    height: '45%',
    backgroundColor: '#fff',
    borderRadius: 8
  }
});


export default styles;
