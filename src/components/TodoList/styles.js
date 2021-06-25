import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#E2F9FF',
    marginTop: 10,
    marginBottom: 55,
  },
  line: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#BBB",
    justifyContent: 'space-around',

    alignItems: 'center',
    flexDirection: 'row',
  },
  lineThough: {
    textDecorationLine: 'line-through' //corte na string
  },
  icon: {
    flexDirection: 'row',
    marginRight: 20,
  },
  editIcon: {
    marginLeft: 40,
  },
  lineText: {
    flex: 3,
    fontSize: 20,
    paddingLeft: 15,
  },
  lengthText: {
    fontSize: 14
  },
  nothing : {
    textAlign: 'center',
    fontSize: 20,
    color: '#013399'
  }
});

export default styles;