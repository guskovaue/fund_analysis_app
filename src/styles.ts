import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  addNewCompanyButton: {
    height: '25%',
    width: '50%',
    backgroundColor: "#009688",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#fff',
  },
  saveButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '5%',
    backgroundColor: "#009688",
    margin: 12,
    bottom: 10,
  },
  saveButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  companyButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  titleText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    alignSelf: "flex-start",
    textTransform: "uppercase",
    margin: 14,
  },
  row: {
    height: '75%',
    flexDirection: "row",
    flexWrap: "wrap",
  },
  input: {
    height: '5%',
    margin: 12,
    borderWidth: 1,
    borderColor: "#009688",
  },
  cancel: {
    position: 'absolute',
    right: 3,
    top: 3,
  },
  plus: {
    height: 18,
    width: 18,
  }
})

export default styles;
