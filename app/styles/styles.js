import { StyleSheet,Dimensions } from 'react-native'
const { width: WIDTH } = Dimensions.get('window')
export const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
},
    inputContainer: {
      marginTop: 8,
      marginBottom: 8
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'white',
    marginHorizontal: 25,
},

    slide: {
      padding: 18,
      alignItems: 'center',
    },
    image: {
      width: 300,
      height: 120,
      margin:80,
      resizeMode:'stretch'
    },
    text: {
      fontSize: 16,
      justifyContent: 'center',
      color: 'rgba(255, 255, 255, 0.8)',
      textAlign: 'center',
    },
    title: {
      marginTop:48,
      marginBottom:16,
      fontSize: 30,
      color: 'white',
      textAlign: 'center',
    },
    descriptionContainer:{
      margin:8
    },
    descripcionTexto:{
      fontSize: 16,
      color: '#001696',
      textAlign: 'center',
    },
    container: {
      paddingTop: 40,
      alignItems: "center"
    },
    containerPrincipal: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#e5e5e5"
    },
    headerText: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      fontWeight: "bold"
    },
    GridViewContainer: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      margin: 5,
      backgroundColor: '#7B1FA2'
   },
   GridViewTextLayout: {
      fontSize: 20,
      fontWeight: 'bold',
      justifyContent: 'center',
      color: '#fff',
      padding: 10,
    },
    imagebg:{
      flex: 1,
      resizeMode: "cover",
      backgroundColor:'rgba(0,0,0,0.5)',
    },
    container: {
        flex: 1
    },
    logoContainer: {
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:16
  },
    TextWelcome: {
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 16,
      marginBottom: 32
  },
    WelcomeText: {
      color: '#001696',
      fontSize: 35,
      textAlign: "center",
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      fontWeight: '500',
      marginTop: 5,
  },
    Logo: {
      width: 265,
      height: 70,
  },
    logoText: {
      color: '#001696',
      fontSize: 25,
      textAlign: "center",
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      fontWeight: '500',
      marginTop: 10,
  },
    inputIcon: {
      position: 'absolute',
      top: 8,
      left: 300
  },
    btnEye: {
      position: 'absolute',
      top: 3,
      right: 37
  },
    btnLogin: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 45,
      justifyContent: 'center',
      backgroundColor: '#001696',
      marginTop: 50
  },
  btnG:{
    width: WIDTH - 45,
    height: 45,
    marginLeft: 100,
    borderRadius: 45,
    justifyContent: 'center',
    backgroundColor: '#001696',
    marginTop: 50
  },
    text: {
      color: 'rgba(255,255,255,1)',
      fontSize: 16,
      textAlign: 'center'
  },
    textforgot: {
      color: '#001696',
      fontSize: 16,
      textAlign: 'center',
      textDecorationLine: 'underline'
  },
    textRegister: {
      fontWeight: 'bold',
      color: '#001696',
      fontSize: 16,
      textAlign: 'center',
      textDecorationLine: 'underline'
  },
    picker: {
      width: WIDTH - 55,
      height: 25,
      borderRadius: 45,
      fontSize: 16,
      paddingLeft: 5,
      color: 'rgba(255,255,255,0.9)',
      backgroundColor: 'rgba(0,0,0,0.0)',
      marginHorizontal: 25,
      marginTop:8,   
      marginLeft:-5,      
    },
    button:{
      width: WIDTH - 55,
      height: 45,
      borderRadius: 45,
      fontSize: 16,
      paddingLeft: 45,
      backgroundColor: 'rgba(0,0,0,0.35)',
      color: 'rgba(255,255,255,0.7)',
      marginHorizontal: 25,
      marginTop:8
    },
    Datetext:{
    textAlign: 'left',
    marginTop:8,
    fontSize:16,
    color: 'rgba(255,255,255,0.7)',
  },
  btnAtras: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginTop: 15
},
  });
  