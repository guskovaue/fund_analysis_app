import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  errorScreen: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorScreenText: {
    color: 'pink',
    fontSize: 18
  },
  errorScreenRocketImage: {
    position: 'absolute',
    left: 3,
    top: 3
  },
  closeButtonImage: {
    tintColor: 'pink'
  },
  myCompaniesScreen: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    height: '10%',
    backgroundColor: 'black',
  },
  companyDetailsScreen: {
    flex: 1,
    backgroundColor: 'black',
  },
  companyDetails2Screen: {
    flex: 1,
    backgroundColor: 'black',
  },
  successScreen: {
    flex: 1,
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
  },
  companyDetailsButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
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
    textAlign: 'center',
    textTransform: "uppercase",
  },
  input: {
    height: '5%',
    margin: 12,
    borderWidth: 1,
    borderColor: "pink",
    color: "pink",
    fontSize: 18
  },
  titleText: {
    fontSize: 16,
    color: "pink",
    fontWeight: "bold",
    alignSelf: "flex-start",
    textTransform: "uppercase",
    margin: 14,
  },
  text: {
    flex: 1,
    fontSize: 15,
    color: "pink",
    margin: 14,
  },
  delete: {
    position: 'absolute',
    right: 3,
    top: 3,
  },
  plus: {
    height: 18,
    width: 18,
  },
  bottomLine: {
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  }
})

export default styles;
