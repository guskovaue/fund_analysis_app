import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  myCompaniesScreen: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    height: '10%',
    backgroundColor: 'black',
  },
  companyDetailsButton: {
    height: '20%',
    width: '50%',
    backgroundColor: "pink",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    borderWidth: 1,
    // borderColor: 'black',
  },
  companyDetailsButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  companyDetailsScreen: {
    flex: 1,
    backgroundColor: 'black'
  },
  saveButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '5%',
    backgroundColor: "pink",
    margin: 12,
    bottom: 10,
  },
  saveButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  input: {
    height: '5%',
    margin: 12,
    borderWidth: 1,
    borderColor: "pink",
  },
  inputText: {
    fontSize: 16,
    color: "pink",
    fontWeight: "bold",
    alignSelf: "flex-start",
    textTransform: "uppercase",
    margin: 14,
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
