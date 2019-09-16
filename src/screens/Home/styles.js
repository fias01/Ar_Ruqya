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
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingTop: 15 ,
    paddingBottom: 25 * 0.66,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuListHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 25,
    marginTop: 20,
  },
  menu: {
    alignItems: 'center',
    width: (width - (80)) / 2,
    height: (height - (410)) / 2,
    marginLeft: 25,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 12,
    marginVertical: 10,
  },
  menuHeader: {
    overflow: 'hidden',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  menuImage: {
    width: (width - (120)) / 2,
    height: (width - (120)) / 2,
  },
  itemenu: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 13,
    elevation: 7,
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: '#DCE0E9',
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: '#007BFA',
  },
  article: {
    width: width - (25 * 2),
    height: width * 0.6,
    marginHorizontal: 25,
    paddingHorizontal: 25,
    paddingVertical: 25 * 0.66,
    borderRadius: 12,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 25 / 2,
  },
  articleInfo: {
      position: 'absolute',
      borderRadius: 12,
      marginHorizontal: -10,
      paddingHorizontal: 30,
      paddingVertical: 25 / 2,
      bottom: 20,
      left: (width - (100)) / (Platform.OS === 'ios' ? 3.2 : 3),
      backgroundColor: '#fff',
      width: width - (100),
    },

});


export default styles;
