import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
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
      fontSize: 30,
      color: 'white',
      textAlign: 'center',
    },
    container: {
      paddingTop: 40,
      alignItems: "center"
    },
    imagebg:{
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
            backgroundColor:'rgba(0,0,0,0.5)',
    }
  });
  